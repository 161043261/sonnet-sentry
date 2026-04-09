import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { init, sonnetEnable } from "sonnet-sentry";
import PerformancePlugin from "sonnet-sentry/plugins/perf";
import ScreenRecordPlugin from "sonnet-sentry/plugins/record";
import ExposurePlugin from "sonnet-sentry/plugins/exposure";

init({ dsn: "/api/log" });
sonnetEnable(PerformancePlugin);
sonnetEnable(ScreenRecordPlugin);
sonnetEnable(ExposurePlugin);

createRoot(document.getElementById("root")!).render(<App />);
