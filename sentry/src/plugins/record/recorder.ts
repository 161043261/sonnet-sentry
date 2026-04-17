import {
  EventType,
  type IDataReporter,
  type IScreenRecordData,
} from "../../types";

import { getBaseData, MinHeap, sentry, larkLogger } from "../../utils";

let pakoInstance: typeof import("pako") | null = null;

export async function recorder(reporter: IDataReporter) {
  larkLogger.info("lark Sentry ScreenRecord", "Initializing rrweb recorder...");
  try {
    const [{ record }, pako] = await Promise.all([
      import("@rrweb/record"),
      import("pako"),
    ]);

    pakoInstance = pako.default || pako;
    const recordHeap = new MinHeap();

    record({
      emit(e, isCheckout) {
        if (isCheckout) {
          if (sentry.shouldRecordScreen) {
            const screenRecordData: IScreenRecordData = {
              ...getBaseData(),
              name: "ScreenRecord",
              type: EventType.ScreenRecord,
              event: zip(e),
            };
            larkLogger.success(
              "lark Sentry ScreenRecord",
              "Screen record packaged and sent",
              { eventLength: screenRecordData.event.length },
            );
            reporter.send(screenRecordData);
            sentry.shouldRecordScreen = false;
          } else {
            recordHeap.clear();
          }
        }
        recordHeap.push(e);
      },
      recordCanvas: true,
      checkoutEveryNms: sentry.options.screenRecordDurationMs,
    });
  } catch (err) {
    larkLogger.error(
      "lark Sentry ScreenRecord",
      "Failed to load rrweb/pako",
      err,
    );
  }
}

export function zip(data: unknown): string {
  if (!data || !pakoInstance) return "";
  const jsonStr = JSON.stringify(data);
  const gzippedArr = pakoInstance.gzip(jsonStr);
  return btoa(String.fromCharCode(...gzippedArr));
}
