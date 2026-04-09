import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// use defineConfig
export default {
  mode: "production",
  entry: {
    index: "./src/index.ts",
    "plugins/perf/index": "./src/plugins/perf/index.ts",
    "plugins/record/index": "./src/plugins/record/index.ts",
    "plugins/exposure/index": "./src/plugins/exposure/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist-webpack"),
    filename: "[name].js",
    library: {
      type: "umd",
      name: "SonnetSentry",
    },
    globalObject: "this",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
    extensionAlias: {
      ".js": [".ts", ".js"],
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
