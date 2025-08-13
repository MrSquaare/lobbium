import { getDefaultConfig } from "expo/metro-config";

const config = getDefaultConfig(__dirname);

config.resolver.unstable_enablePackageExports = true;

export default config;
