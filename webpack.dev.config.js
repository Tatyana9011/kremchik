const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    open: true,
    contentBase: './dist',
    address: '127.0.0.1',
    port: 8080,
    hot: true,
    writeToDisk: true,
    clientLogLevel: "warn"
  },
  output: {
    filename: '[name].bundle-dev.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    environment: {
      arrowFunction: false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  
};