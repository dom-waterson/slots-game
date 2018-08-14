const merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
});
