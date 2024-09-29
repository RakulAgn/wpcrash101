const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./app/index.js", // Entry File Where to Start we can also have mutlple enter files two
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "svg-inline-loader", // To Minify Svgs
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // To Minify Css
      },
      {
        test: /\.(js)$/,
        use: "babel-loader", // To Minify JS
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()], // Used to Import js files into html
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
