import { expoClient } from "@better-auth/expo/client";
import { createAuthClient } from "better-auth/react";
import * as SecureStore from "expo-secure-store";

import { env } from "./env";

export const authClient = createAuthClient({
  baseURL: new URL("/auth", env.EXPO_PUBLIC_API_BASE_URL).toString(),
  plugins: [
    expoClient({
      storage: SecureStore,
    }),
  ],
});
