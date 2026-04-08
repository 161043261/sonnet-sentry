import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";

export default defineConfig([
  {
    input: {
      index: "./sentry/src/index.ts",
      "plugins/perf/index": "./sentry/src/plugins/perf/index.ts",
      "plugins/record/index": "./sentry/src/plugins/record/index.ts",
    },
    output: [
      {
        dir: "./sentry/dist",
        format: "esm",
        exports: "named",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "./sentry/src",
        plugins: [terser()],
      },
      {
        dir: "./sentry/dist",
        format: "cjs",
        exports: "named",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "./sentry/src",
        entryFileNames: "[name].cjs",
        plugins: [terser()],
      },
    ],
    plugins: [
      nodeResolve({
        extensions: [".js", ".json"],
      }),
      commonjs(),
      json(),
      typescript({
        tsconfig: "./sentry/tsconfig.json",
        declaration: false,
      }),
    ],
    external: [
      "vue",
      "react",
      "web-vitals",
      "@rrweb/record",
      "pako",
      "ua-parser-js",
    ],
  },
  {
    input: {
      index: "./sentry/src/index.ts",
      "plugins/perf/index": "./sentry/src/plugins/perf/index.ts",
      "plugins/record/index": "./sentry/src/plugins/record/index.ts",
    },
    output: {
      dir: "./sentry/dist",
      format: "esm",
      exports: "named",
      preserveModules: true,
      preserveModulesRoot: "./sentry/src",
    },
    plugins: [dts()],
  },
]);
