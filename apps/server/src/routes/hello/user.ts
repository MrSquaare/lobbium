import { Hono } from "hono";

import { authMiddleware } from "../../middlewares/auth.js";

export const userRoute = new Hono().use(authMiddleware).get("/", (c) => {
  const user = c.get("session")?.user;

  if (!user) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  return c.json({ message: `Hello, ${user.name}!` });
});
