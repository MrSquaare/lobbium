import { createMiddleware } from "hono/factory";

import { db, type DB } from "../lib/db.js";

export type DBMiddlewareVariables = {
  db: DB;
};

export const dbMiddleware = createMiddleware<{
  Variables: DBMiddlewareVariables;
}>(async function dbFn(c, next) {
  if (c.get("db") !== undefined) {
    return next();
  }

  c.set("db", db);

  return next();
});
