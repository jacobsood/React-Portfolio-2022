import webpackCommon from "./webpack.common.js";

const config = {
  ...webpackCommon,
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: ["public"],
    open: true,
    port: 3000,
    historyApiFallback: true,
  },
};

export default config;
