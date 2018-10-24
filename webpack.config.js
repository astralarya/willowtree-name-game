const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [{
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
        'css-loader', 'postcss-loader', 'sass-loader',
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
  ],
  devtool: "source-map",
}
