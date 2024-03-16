const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const commonJSConfig = {
  entry: ['./index.js'],
  module: {
    rules: [],
  },
  target: 'web'
};

const rawConfig = Object.assign({}, commonJSConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'neobytes-lib.js',
    library: 'neobytes core',
    libraryTarget: 'umd',
  }
});
const uglifiedConfig = Object.assign({}, commonJSConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'neobytes-lib.min.js',
    library: 'neobytes core',
    libraryTarget: 'umd',
  },
  plugins: [
    new UglifyJsPlugin()
  ]
});

module.exports = [rawConfig, uglifiedConfig];