var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

var webpack = require("webpack");


module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        excluse: /node_modules/,
        loader : 'babel-loader',      
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
};
