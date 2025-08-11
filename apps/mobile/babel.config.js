/** @type {import('react-native-unistyles/plugin').UnistylesPluginOptions} */
const unistylesConfig = {
  root: "src",
};

export default function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [["react-native-unistyles/plugin", unistylesConfig]],
  };
}
