import config from "@lobbium/eslint-config";
import globals from "globals";

export default [
  {
    ignores: ["dist"],
  },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  ...config,
];
