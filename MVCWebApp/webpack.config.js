const path = require('path');
const entries = require('./bundleEntries.json')
module.exports = {
  entry: entries,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }
    ]
  },
  externals: {
    jquery: 'jQuery',
  },
  output: {
    libraryTarget: 'umd',
    filename: '[name].js',
    path: path.resolve(__dirname, 'wwwroot/js/bundle'),
    clean: true,
  },
  mode: 'development'
};