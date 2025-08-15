import "tsx/cjs";

import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Lobbium",
  slug: "lobbium",
  scheme: "lobbium",
  version: "0.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    bundleIdentifier: "fr.lobbium.app",
    supportsTablet: true,
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    package: "fr.lobbium.app",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: [
    "expo-router",
    "expo-secure-store",
    "react-native-edge-to-edge",
    "expo-web-browser",
    "./plugins/custom-gradle-properties.ts",
  ],
  extra: {
    eas: {
      projectId: "c61a5c5b-a0b4-4083-a905-04650a3e48cf",
    },
  },
});
