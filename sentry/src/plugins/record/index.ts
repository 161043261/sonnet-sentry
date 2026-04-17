import { EventType, SentryPlugin } from "../../types";

import { sentry } from "../../utils";

import reporter from "../../reporter";

import { DEFAULT_OPTIONS } from "../../constants";

import { recorder } from "./recorder.js";

class ScreenRecordPlugin extends SentryPlugin {
  durationMs = DEFAULT_OPTIONS.screenRecordDurationMs;
  eventTypes: EventType[] = DEFAULT_OPTIONS.screenRecordEventTypes;

  constructor(
    options: {
      durationMs?: number;
      eventTypes?: EventType[];
    } = {
      durationMs: DEFAULT_OPTIONS.screenRecordDurationMs,
      eventTypes: DEFAULT_OPTIONS.screenRecordEventTypes,
    },
  ) {
    super(EventType.ScreenRecord);
    const {
      durationMs = DEFAULT_OPTIONS.screenRecordDurationMs,
      eventTypes = DEFAULT_OPTIONS.screenRecordEventTypes,
    } = options;
    this.durationMs = durationMs;
    this.eventTypes = eventTypes;
  }

  init() {
    sentry.options.enableScreenRecord = true;
    sentry.options.screenRecordEventTypes = this.eventTypes;
    sentry.options.screenRecordDurationMs = this.durationMs;
    recorder(reporter);
  }
}

export default ScreenRecordPlugin;
