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
        exclude: /node_modules/,
<<<<<<< HEAD
        loader : 'babel-loader',
=======
        loader : 'babel-loader',      
>>>>>>> origin/master
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
};
