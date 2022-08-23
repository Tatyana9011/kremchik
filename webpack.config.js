const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './index.js',
  },
  output: {
    filename: 'bundle.[contenthash].js', 
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  context: path.resolve(__dirname, 'src'),
  plugins: [new HtmlWebpackPlugin()],
  
}