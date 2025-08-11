import config from "@lobbium/eslint-config";
import configReact from "@lobbium/eslint-config-react";
import globals from "globals";

export default [
  {
    ignores: ["dist/", "android/", "ios/"],
  },
  {
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
];
