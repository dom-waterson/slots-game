/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
/* eslint-enable import/no-extraneous-dependencies */
const path = require('path');

module.exports = {
  entry: {
    app: './app/index.js',
  },

  output: {
    path: path.resolve(__dirname, '_build'),
    filename: '[name].[chunkhash].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['_build']),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
};
