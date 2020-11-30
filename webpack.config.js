const webpack = require("webpack");

// configuration for webpack, created when installed webpack bundler

const path = require("path");
module.exports = {
  context: __dirname,
  entry: "./src/index.js", 
  output: {
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", "*"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env"],
          },
        },
      },
    ],
  },
  devtool: "source-map",
};
