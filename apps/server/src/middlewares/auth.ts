import { createMiddleware } from "hono/factory";

import { auth, type Auth } from "../lib/auth.js";

export type AuthMiddlewareVariables = {
  session: Auth["$Infer"]["Session"] | null;
};

export const authMiddleware = createMiddleware<{
  Variables: AuthMiddlewareVariables;
}>(async function authFn(c, next) {
  if (c.get("session") !== undefined) {
    return next();
  }

  c.set(
    "session",
    await auth.api.getSession({
      headers: c.req.raw.headers,
    }),
  );

  return next();
});
