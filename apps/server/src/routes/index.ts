import { Hono } from "hono";

import { authRoutes } from "./auth.js";
import { helloRoutes } from "./hello/index.js";

export const routes = new Hono()
  .route("/auth", authRoutes)
  .route("/hello", helloRoutes);
