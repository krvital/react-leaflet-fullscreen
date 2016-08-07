const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    library: 'FullscreenControl',
    libraryTarget: 'umd'
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
  externals: [
    {
      'react': 'react',
      'react-leaflet': 'react-leaflet',
      'react-dom': 'react-dom',
      'leaflet': 'leaflet',
    },
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
