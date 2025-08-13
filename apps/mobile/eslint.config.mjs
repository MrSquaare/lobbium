import config from "@lobbium/eslint-config";
import configReact from "@lobbium/eslint-config-react";
import expo from "eslint-plugin-expo";
import globals from "globals";

export default [
  {
    ignores: ["dist/", "android/", "ios/"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["metro.config.mjs"],
    languageOptions: {
      globals: globals.node,
    },
  },
  ...config,
  ...configReact,
  {
    settings: {
      "import/ignore": ["react-native"],
    },
  },
  {
    plugins: {
      expo,
    },
    rules: {
      "expo/no-dynamic-env-var": ["error"],
      "expo/no-env-var-destructuring": ["error"],
    },
  },
];
