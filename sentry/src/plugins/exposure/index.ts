import { EventType, SentryPlugin, Status } from "../../types/index.js";
import reporter from "../../reporter/index.js";
import { getBaseData, sonnetLogger } from "../../utils/index.js";

interface IExposureTarget {
  target: Element;
  threshold?: number;
  params?: Record<string, any>;
}

class ExposurePlugin extends SentryPlugin {
  private ioMap: Map<number, IntersectionObserver> = new Map();
  private targetMap: Map<
    Element,
    { threshold: number; observeTime: number; showTime?: number; params?: any }
  > = new Map();

  constructor() {
    super(EventType.Custom); // Or define an Exposure event type
  }

  init() {
    sonnetLogger.info("Sonnet Sentry Exposure", "Exposure plugin initialized");
  }

  private initObserver(threshold: number) {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetObj = this.targetMap.get(entry.target);
          if (!targetObj) return;

          if (entry.isIntersecting) {
            targetObj.showTime = Date.now();
          } else {
            if (!targetObj.showTime) return;
            const showEndTime = Date.now();
            this.sendEvent(targetObj, showEndTime);
            delete targetObj.showTime; // Reset for next exposure
          }
        });
      },
      { threshold },
    );
  }

  private sendEvent(targetObj: any, showEndTime: number) {
    reporter.send({
      ...getBaseData(),
      type: EventType.Custom,
      name: "Exposure",
      message: "Element Exposure",
      status: Status.OK,
      extra: {
        threshold: targetObj.threshold,
        observeTime: targetObj.observeTime,
        showTime: targetObj.showTime,
        showEndTime,
        duration: showEndTime - targetObj.showTime,
        params: targetObj.params,
      },
    });
  }

  public observe(targets: IExposureTarget | IExposureTarget[]) {
    const list = Array.isArray(targets) ? targets : [targets];
    list.forEach((item) => {
      const threshold = item.threshold || 0.5;
      if (!this.ioMap.has(threshold)) {
        this.ioMap.set(threshold, this.initObserver(threshold));
      }

      if (!this.targetMap.has(item.target)) {
        this.ioMap.get(threshold)!.observe(item.target);
        this.targetMap.set(item.target, {
          threshold,
          observeTime: Date.now(),
          params: item.params,
        });
      }
    });
  }

  public unobserve(target: Element) {
    const targetObj = this.targetMap.get(target);
    if (!targetObj) return;

    const io = this.ioMap.get(targetObj.threshold);
    if (io) {
      io.unobserve(target);
    }
    this.targetMap.delete(target);
  }
}

export default ExposurePlugin;
