import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { init, larkEnable } from "lark-sentry";
import PerformancePlugin from "lark-sentry/plugins/perf";
import ScreenRecordPlugin from "lark-sentry/plugins/record";
import ExposurePlugin from "lark-sentry/plugins/exposure";

init({ dsn: "/api/log" });
larkEnable(PerformancePlugin);
larkEnable(ScreenRecordPlugin);
larkEnable(ExposurePlugin);

createRoot(document.getElementById("root")!).render(<App />);
