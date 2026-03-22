import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import sentryPlugin from "./vite-plugin-sentry";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // sentryPlugin()
  ],
  optimizeDeps: {
    // 禁止预构建依赖
    exclude: [
      "@sonnet-sentry/core",
      "@sonnet-sentry/performance",
      "@sonnet-sentry/screen-record",
    ],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
