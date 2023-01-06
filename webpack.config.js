

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    publicPath: '',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [

     {
       test: /\.svg$/i,
       type: 'asset/resource',
       use: [
        {
          loader: 'file-loader',
        },
      ],
     },
    ],
  },
};