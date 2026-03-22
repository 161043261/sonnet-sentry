import {
  EventType,
  SentryPlugin,
  type IPerformanceData,
} from "@sonnet-sentry/types";

import reporter from "@sonnet-sentry/reporter";

import { getBaseData } from "@sonnet-sentry/utils";

import { getResourceList, getWebVitals } from "./src/perf.js";

class PerformancePlugin extends SentryPlugin {
  constructor() {
    super(EventType.Performance);
  }

  async init() {
    getWebVitals((data: IPerformanceData) => {
      reporter.send(data);
    });

    const observer = new PerformanceObserver((entryList) => {
      const longTaskData: IPerformanceData = {
        ...getBaseData(),
        name: "LongTask",
        type: EventType.Performance,
        longTasks: entryList.getEntries(),
      };
      reporter.send(longTaskData);
    });
    observer.observe({ entryTypes: ["longTask".toLowerCase()] });

    globalThis.addEventListener("load", () => {
      const resourceListData: IPerformanceData = {
        ...getBaseData(),
        name: "ResourceList",
        type: EventType.Performance,
        resourceList: getResourceList(),
      };
      reporter.send(resourceListData);
    });

    if (
      "measureUserAgentSpecificMemory" in performance &&
      typeof performance.measureUserAgentSpecificMemory === "function"
    ) {
      const memoryData: IPerformanceData = {
        ...getBaseData(),
        name: "Memory",
        type: EventType.Performance,
        message: "performance.measureUserAgentSpecificMemory",
        memory: await performance.measureUserAgentSpecificMemory(),
      };
      reporter.send(memoryData);
    }
  }
}

export default PerformancePlugin;
