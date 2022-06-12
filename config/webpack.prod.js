import webpackCommon from "./webpack.common.js";

const config = {
  ...webpackCommon,
  mode: "production",
  devtool: "source-map",
};

export default config;
