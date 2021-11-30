const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.jsx"],
  // addons: [
  //   "@storybook/addon-links",
  //   "@storybook/addon-essentials",
  //   {
  //     name: "@storybook/addon-postcss",
  //     options: {
  //       postcssLoaderOptions: {
  //         implementation: require("postcss"),
  //       },
  //     },
  //   },
  // ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    // config.module.rules.push({
    //   test: /\.(ts|tsx)$/,
    //   loader: require.resolve("babel-loader"),
    //   options: {
    //     presets: [["react-app", { flow: false, typescript: true }]]
    //   }
    // });
    // config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
