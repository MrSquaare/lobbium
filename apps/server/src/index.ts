import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { showRoutes } from "hono/dev";
import { logger } from "hono/logger";

import { env } from "./lib/env.js";
import { routes } from "./routes/index.js";

const app = new Hono().use(logger()).route("/", routes);

serve(
  {
    fetch: app.fetch,
    port: env.PORT,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);

    showRoutes(app, {
      verbose: true,
    });
  },
);

export type App = typeof app;
