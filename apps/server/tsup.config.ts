import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  target: "esnext",
  format: "esm",
  minify: true,
  dts: true,
  clean: true,
});
