import type { App } from "@lobbium/server";
import { hc } from "hono/client";

import { env } from "./env";

export const apiClient = hc<App>(
  new URL(env.EXPO_PUBLIC_API_BASE_URL).toString(),
);
