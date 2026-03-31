# Sonnet Sentry - 前端监控 SDK 技术文档

## 项目概述

**Sonnet Sentry** 是一套面向 Web 应用的前端可观测性 SDK，采用 Monorepo 组织形态，将监控能力拆分为可组合的独立包。SDK 以“事件采集 → 事件分发 → 数据加工 → 可靠上报”为主链路，覆盖异常捕获、网络请求监控、路由追踪、白屏检测、性能指标采集与故障现场录制等典型场景，并提供 React/Vue 集成入口。

## 代码结构

- **`packages/`**：SDK 核心实现（事件总线、Hook/配置、采集插件、上报器、工具库与类型定义）。
- **`client/`**：React Demo，用于演示集成与上报效果。
- **`server/`**：Koa Demo，用于接收 SDK 上报数据并落盘验证链路。

---

## 核心架构与工程化设计

### 1. 事件驱动与发布-订阅（Pub/Sub）

SDK 通过事件总线实现核心解耦：采集侧只负责产出事件与基础上下文，业务侧以订阅方式消费事件并完成面包屑维护、数据加工与上报触发。该模式能够在不侵入既有逻辑的前提下扩展新的监控能力，并降低横向耦合成本。

### 2. 全局状态容器与配置体系

SDK 维护单例状态对象 `sentry`（挂载至 `globalThis.__sentry__`），集中管理：

- **运行时选项**：在 `init()` 阶段将用户 options 与 `DEFAULT_OPTIONS` 合并，形成全局配置快照。
- **设备环境信息**：基于 `ua-parser-js` 解析浏览器与操作系统信息，作为上报字段的一部分。
- **运行期状态**：包括源代码错误去重集合、白屏定时器句柄、录屏触发标记等。

### 3. 跨框架集成（React / Vue）

- **Vue**：通过注入 `app.config.errorHandler` 捕获框架错误，同时保留并回调用户原有错误处理逻辑。
- **React**：提供 `ReactErrorBoundary`，在 `componentDidCatch` 中采集组件树错误与错误信息。
- **插件机制**：提供 `sonnetEnable()` 以统一方式启用 `SentryPlugin` 派生插件（如性能、录屏等），便于按需开启能力并控制产物体积。

### 4. Monorepo 模块化拆分

核心模块按职责拆分，形成清晰的依赖边界与可复用能力：

- `@sonnet-sentry/core`：初始化入口、事件采集与分发、白屏检测、基础处理链路。
- `@sonnet-sentry/performance`：Web Vitals、首屏渲染时间、LongTask、资源与内存指标采集插件。
- `@sonnet-sentry/screen-record`：基于 rrweb 的录屏与压缩上报插件。
- `@sonnet-sentry/reporter`：统一上报器（Beacon 优先，Fetch/Image 降级），并支持上报前 Hook。
- `@sonnet-sentry/utils` / `@sonnet-sentry/types`：公共工具与类型系统，保证跨包语义一致。

---

## 核心技术点解析

### 1. 多维度异常捕获与分类处理

- **JS 运行时异常与 Promise 异常**：监听 `error` 与 `unhandledrejection`，覆盖同步与异步未处理异常路径。
- **资源加载异常识别**：对捕获阶段 `error` 事件进行区分处理，支持识别带 `src/href` 的资源加载失败并转换为统一上报结构。
- **错误去重与稳定 ID**：针对代码错误，使用 URL-safe Base64 对关键信息进行编码生成错误指纹，并以 `Set` 在运行期去重，避免短时间内重复上报造成噪声。

### 2. Monkey Patch 无感采集（XHR / Fetch / 路由）

- **XMLHttpRequest**：装饰 `XMLHttpRequest.prototype.open/send`，在实例上挂载 `__sentry__` 请求上下文，`loadend` 时补全响应信息与耗时并发布事件；同时支持对上报 DSN 与自定义排除规则（string/RegExp）进行过滤，避免递归采集。
- **Fetch**：装饰 `globalThis.fetch`，通过 `Response.clone()` 安全读取响应体文本并发布事件；同样支持 DSN 与排除规则过滤。
- **History / Hash**：装饰 `history.pushState/replaceState` 与 `onpopstate`，并监听 `hashchange`，精确构建 `from → to` 的路由轨迹数据。

### 3. 行为轨迹栈（Breadcrumbs）与内存控制

- **轨迹语义化**：将网络、点击、路由等事件映射为面包屑类型，形成可读的故障定位上下文。
- **DOM 目标压缩表达**：点击事件通过生成最多 5 层的选择器路径（tag/id/class 组合）表达目标节点，避免直接序列化 DOM 造成体积膨胀。
- **定长存储结构**：以最小堆（MinHeap）保存时间序列数据，在容量受限情况下持续保留最新事件，剔除最旧记录，降低长期运行带来的内存风险；并提供入堆前 Hook 以支持脱敏与字段裁剪。

### 4. 智能白屏检测（兼容骨架屏）

- **关键点采样**：沿水平与垂直方向进行 18 点采样（`elementFromPoint`），统计“空点/根容器点”比例判断白屏。
- **骨架屏对比**：在开启骨架屏模式时，基于根节点的 CSS Selector 特征集合做多次采样比对，区分“骨架屏等待渲染”与“真实白屏”。
- **低开销调度**：采样通过 `setInterval` 周期触发，并在支持时使用 `requestIdleCallback` 将采样放入浏览器空闲期执行，同时以最大采样次数上限与 stop 机制防止长期占用。

### 5. 性能指标采集（Web Vitals + 自研补充）

- **Web Vitals 指标**：集成 `web-vitals` 采集 LCP/FCP/CLS/INP/TTFB，并统一映射为可上报结构。
- **首屏渲染时间（FSP）估算**：使用 `MutationObserver` 监听 DOM 变更，结合 `requestAnimationFrame` 等待页面进入稳定状态后，以最后一次有效变更时间近似首屏渲染完成时间；过滤非视口与无关标签（script/style/link）以减少噪声。
- **资源与长任务**：上报页面 `resource` 列表并计算是否命中缓存（transferSize/encodedBodySize 判断）；使用 `PerformanceObserver` 采集 LongTask；在浏览器支持时调用 `performance.measureUserAgentSpecificMemory()` 采集内存信息。

### 6. 故障现场录制与压缩上报

- **录屏采集**：通过 `@rrweb/record` 获取增量事件与快照，按固定周期 checkout 形成录制片段。
- **触发策略**：当上报器识别到特定事件类型（如 Error/Xhr/Fetch 等）时设置录屏触发标记，录制片段在 checkout 时被压缩并上报，从而实现“按需录制、故障触发回传”。
- **压缩与编码**：使用 `pako` 对录屏 JSON 进行 gzip 压缩，并编码为 Base64 字符串以便网络传输。

### 7. 可靠上报与异步队列

- **统一数据模型**：对外上报结构包含业务 payload、SDK 版本、项目/用户标识、设备信息与 URL；同时支持上报前异步 Hook 以实现字段补齐与脱敏。
- **传输策略**：优先使用 `navigator.sendBeacon`，在失败时根据配置降级为 Fetch 或 Image 方式；Fetch/Image 上报通过回调队列延迟执行，优先占用空闲时段，降低对主线程的影响。

---

## 简历适用总结 (约 100 字)

实现 TypeScript Monorepo 前端监控 SDK（插件化扩展）：基于 Pub/Sub 事件总线解耦采集与处理，维护全局配置与运行态（UAParser 设备信息、错误去重、白屏定时器、录屏触发标记等）；通过 Monkey Patch 无感劫持 XHR/Fetch/History/Hash，采集请求耗时/状态码/响应并支持 DSN 与 RegExp 规则过滤；覆盖运行时异常、资源加载失败、unhandledrejection 以及 React ErrorBoundary / Vue errorHandler 框架错误；构建定长 Breadcrumb 轨迹栈（MinHeap 保留最新 N 条，入堆 Hook 支持脱敏）；白屏检测采用 18 点 elementFromPoint 采样与骨架屏 Selector 对比，并结合 requestIdleCallback 降低开销；性能侧集成 Web Vitals（LCP/FCP/CLS/INP/TTFB）+ MutationObserver 首屏渲染估算（FSP），并上报 LongTask、资源列表与缓存命中、可用时测量内存；故障现场通过 rrweb 录制并以 pako gzip + Base64 压缩回传；上报链路 sendBeacon 优先，失败降级 Fetch/Image，支持 onBeforeReportData 异步 Hook，确保可靠传输与可观测性闭环。
