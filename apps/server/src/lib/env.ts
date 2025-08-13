import "dotenv/config";
import { z } from "zod";

const parseArray = (val: unknown) => {
  if (typeof val === "string") {
    return val
      .split(",")
      .map((origin) => origin.trim())
      .filter(Boolean);
  }

  return null;
};

const schema = z.object({
  PORT: z.coerce.number().int().positive(),
  DATABASE_HOST: z.string().min(1),
  DATABASE_PORT: z.coerce.number().int().positive(),
  DATABASE_USER: z.string().min(1),
  DATABASE_PASSWORD: z.string().min(1),
  DATABASE_NAME: z.string().min(1),
  DATABASE_SSL: z.stringbool(),
  AUTH_SECRET: z.string().min(12),
  CORS_ORIGINS: z.preprocess(parseArray, z.array(z.url()).min(1)),
});

export const env = schema.parse(process.env);
