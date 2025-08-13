import { Hono } from "hono";

export const worldRoute = new Hono().get("/", (c) => {
  return c.json({ message: "Hello, World!" });
});
