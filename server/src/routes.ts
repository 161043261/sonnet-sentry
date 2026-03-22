import { existsSync, lstatSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import Router from "@koa/router";
import getRawBody from "raw-body";
import type Koa from "koa";
import { cfg } from "./config.js";
import { logger } from "./logger.js";

export function registerRoutes(app: Koa) {
  const router = new Router();

  router.post("/api/log", async (ctx) => {
    let body: Buffer;
    try {
      body = await getRawBody(ctx.req, {
        limit: cfg.getConfig().server.body_limit,
      });
    } catch (err) {
      ctx.status = 413;
      ctx.body = { code: 413, message: "Payload Too Large or Invalid Body" };
      return;
    }

    if (!body || body.length === 0) {
      ctx.status = 400;
      ctx.body = { code: 400, message: "Empty request body" };
      return;
    }

    try {
      logger.writeSdkLog(body);
    } catch (error) {
      const errorLogger = logger.getErrorLogger();
      if (errorLogger) {
        errorLogger.error(`Failed to write log: ${error}`);
      }
      ctx.status = 500;
      ctx.body = { code: 500, message: "Failed to process log" };
      return;
    }

    ctx.body = { code: 0, message: "success" };
  });

  router.get("/api/health", async (ctx) => {
    const status = {
      status: "ok",
      timestamp: Math.floor(Date.now() / 1000),
      services: {
        disk: await checkDiskSpace(),
      },
    };
    ctx.body = status;
  });

  app.use(router.routes());
  app.use(router.allowedMethods());
}

async function checkDiskSpace() {
  const logDir = cfg.getConfig().log.dir;

  // Check if log directory is accessible
  if (!existsSync(logDir)) {
    return { status: "error", error: `Directory not found: ${logDir}` };
  }

  if (!lstatSync(logDir).isDirectory()) {
    return { status: "error", error: "log path is not a directory" };
  }

  // Create temp file to check if writable
  const testFile = join(logDir, ".health_check");
  try {
    writeFileSync(testFile, "");
    unlinkSync(testFile);
  } catch (_error) {
    return { status: "warning", error: "directory not writable" };
  }

  return { status: "ok", path: logDir };
}
