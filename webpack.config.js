const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.join(__dirname, 'dist');
const APP_DIR = path.join(__dirname, 'src');

/*const VENDOR_LIBS = [
  'react', 'react-dom', 'react-router-dom'
];*/

const config = {
  entry: APP_DIR + '/index.js',
  /*entry: {
    bundle: APP_DIR + '/index.js',
    vendor: VENDOR_LIBS
  },*/
  output: {
    path: BUILD_DIR,
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader'
      }
    ]
  },
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    port: 9000,
    disableHostCheck: false,
    open: true,
    hot: true
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config;
