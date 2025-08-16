import { ConfigPlugin, withGradleProperties } from "expo/config-plugins";

const withCustomGradleProperties: ConfigPlugin = (config) => {
  return withGradleProperties(config, (config) => {
    config.modResults.push({
      type: "property",
      key: "org.gradle.caching",
      value: "true",
    });

    return config;
  });
};

export default withCustomGradleProperties;
