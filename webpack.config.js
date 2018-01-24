var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');


module.exports = {
  context: __dirname,
  devtool: 'source-map', //debug? "inline-sourcemap" : null,
  entry: './app',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname,
    filename: 'app.js',
  },
  plugins: [ //debug ? [] : [
    //new webpack.optimize.DedupePlugin(),
    //new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    new HtmlPlugin({
      template: 'app/index.html'
    })
  ]
};
