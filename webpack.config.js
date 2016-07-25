const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'react-leaflet-fullscreen.js',
  },
  plugins: [
    new ExtractTextPlugin('react-leaflet-fullscreen.css')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exlude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url?limit=1000&name=/images/[name].[ext]'
      },
    ]
  },
}
