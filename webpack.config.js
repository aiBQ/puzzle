var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var definePlugin = webpack.DefinePlugin;

module.exports = {
  entry: {
    'game': './res/src/router.jsx'
  },
  output: {
    path: './dist/', 
    filename: '[name].bundle.js'
  },
  module: {
    loaders:[{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    }, { 
      test: /\.css$/, 
      loader: 'style-loader!css-loader' 
    }, { 
      test: /\.(png|jpg)$/, 
      loader: 'url-loader?limit=512'
    }]
  },
  plugins: [
    // new uglifyJsPlugin({compress: {warnings: false}}),
    // new definePlugin({'process.env': {NODE_ENV: '"production"'}})
  ]
};
