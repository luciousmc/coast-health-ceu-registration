const path = require("path");
require("dotenv").config();

const publicPath = path.resolve(__dirname, "server/public");
const srcPath = path.resolve(__dirname, "client");

module.exports = {
  mode: "none",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: srcPath,
  output: {
    path: publicPath,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: srcPath,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-transform-react-jsx"],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: publicPath,
    proxy: {
      "/api": `http://localhost:${process.env.SERVER_PORT}`,
    },
    port: process.env.DEV_SERVER_PORT,
    historyApiFallback: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    stats: "minimal",
    watchContentBase: true,
  },
};
