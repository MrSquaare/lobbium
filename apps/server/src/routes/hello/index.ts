import { Hono } from "hono";

import { userRoute } from "./user.js";
import { worldRoute } from "./world.js";

export const helloRoutes = new Hono()
  .route("/user", userRoute)
  .route("/world", worldRoute);
