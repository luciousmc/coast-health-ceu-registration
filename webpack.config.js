const path = require("path");

const publicPath = path.resolve(__dirname, "client");
const srcPath = path.resolve(__dirname, "server/public");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: srcPath,
  output: publicPath,
  module: {
    rules: [
      {
        test: /^.jsx?$/,
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
      "/api": process.env.SERVER_PORT,
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
