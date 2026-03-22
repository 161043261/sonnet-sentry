import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { init, sonnetEnable } from "@sonnet-sentry/core";
import PerformancePlugin from "@sonnet-sentry/performance";
import ScreenRecordPlugin from "@sonnet-sentry/screen-record";

init({ dsn: "/api/log" });
sonnetEnable(PerformancePlugin);
sonnetEnable(ScreenRecordPlugin);

createRoot(document.getElementById("root")!).render(<App />);
