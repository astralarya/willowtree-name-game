const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".tsx", ".ts"],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      enforce: "pre",
      use: {
        loader: "tslint-loader",
      }
    },{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      }
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "source-map-loader",
      }
    },{
      test: /\.html$/,
      use: {
        loader: "html-loader",
        options: { minimize: true },
      }
    },{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          query: { modules: true },
        }, 'postcss-loader', 'sass-loader',
      ],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  devtool: "source-map",
}
