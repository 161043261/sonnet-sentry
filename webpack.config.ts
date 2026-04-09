import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Configuration } from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sentry SDK 配置
const sentryConfig: Configuration = {
  name: "sentry",
  mode: "production",
  target: "web",
  entry: {
    index: "./sentry/src/index.ts",
    "plugins/perf/index": "./sentry/src/plugins/perf/index.ts",
    "plugins/record/index": "./sentry/src/plugins/record/index.ts",
    "plugins/exposure/index": "./sentry/src/plugins/exposure/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist/sentry"),
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
              configFile: "sentry/tsconfig.json",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};

// Client (React/Vite) 配置
const clientConfig: Configuration = {
  name: "client",
  mode: "production",
  target: "web",
  entry: "./client/src/main.tsx",
  output: {
    path: path.resolve(__dirname, "dist/client"),
    filename: "assets/[name].[contenthash].js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "client/tsconfig.app.json",
              transpileOnly: true,
              compilerOptions: {
                noEmit: false,
                allowImportingTsExtensions: false,
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html",
      favicon: "./client/public/favicon.svg",
    }),
  ],
};

// Server (Node.js) 配置
const serverConfig: Configuration = {
  name: "server",
  mode: "production",
  target: "node",
  entry: "./server/src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist/server"),
    filename: "index.js",
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
              configFile: "server/tsconfig.json",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};

export default [sentryConfig, clientConfig, serverConfig];
