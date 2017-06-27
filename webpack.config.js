const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const basePath = path.resolve(__dirname, '../../');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    //path: path.join(__dirname, "dist/site"),
    filename: 'index.js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: "babel-loader",
      },
      {
        test: /\.css|.less?$/,
        // exclude: path.join(__dirname, "node_modules"),
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader!less-loader",
        }),
        // loader: "style-loader!css-loader!less-loader?sourceMap"
        // include: /components/
      },
    ]
  },
  devServer: {
    noInfo: false,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css"),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
  node: {
    fs: 'empty'
  }
};