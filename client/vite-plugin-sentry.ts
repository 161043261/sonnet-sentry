import { type Plugin } from "vite";
import { join } from "node:path";
import { mkdirSync, existsSync, createWriteStream, WriteStream } from "node:fs";
import pino from "pino";

export default function sentryPlugin(): Plugin {
  let logger: pino.Logger;
  let fileStream: WriteStream;

  return {
    name: "vite-plugin-sentry",
    configureServer(server) {
      const logsDir = join(process.cwd(), "logs");
      if (!existsSync(logsDir)) {
        mkdirSync(logsDir, { recursive: true });
      }

      const timestamp = new Date()
        .toISOString()
        .replace(/[-:.]/g, "")
        .slice(0, 14);
      const logFile = join(logsDir, `sdk_${timestamp}.log`);

      fileStream = createWriteStream(logFile, { flags: "a" });

      logger = pino(
        {
          level: "info",
          formatters: {
            level: (label) => ({ level: label }),
          },
          timestamp: pino.stdTimeFunctions.isoTime,
        },
        pino.multistream([{ stream: process.stdout }, { stream: fileStream }]),
      );

      logger.info(
        `Sentry mock plugin initialized. Logs will be written to ${logFile}`,
      );

      server.middlewares.use((req, res, next) => {
        if (req.url === "/api/log" && req.method === "POST") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString();
          });
          req.on("end", () => {
            if (body) {
              try {
                const parsedBody = JSON.parse(body);
                fileStream.write(JSON.stringify(parsedBody) + "\n");
              } catch {
                fileStream.write(body + "\n");
              }
            }
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 200;
            res.end(JSON.stringify({ code: 0, message: "success" }));
          });
        } else {
          next();
        }
      });
    },
    closeBundle() {
      if (fileStream) {
        fileStream.close();
      }
    },
  };
}
