import { Hono } from "hono";
import { cors } from "hono/cors";

import { auth } from "../lib/auth.js";
import { env } from "../lib/env.js";

export const authRoutes = new Hono()
  .use(
    cors({
      origin: env.CORS_ORIGINS,
      allowHeaders: ["Content-Type", "Authorization"],
      allowMethods: ["POST", "GET", "OPTIONS"],
      exposeHeaders: ["Content-Length"],
      maxAge: 600,
      credentials: true,
    }),
  )
  .on(["POST", "GET"], "*", (c) => {
    return auth.handler(c.req.raw);
  });
