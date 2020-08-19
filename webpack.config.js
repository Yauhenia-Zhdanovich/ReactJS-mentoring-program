require('@babel/register');

const webpackMerge = require('webpack-merge');
const { merge } = require('webpack-merge');
const common = require('./webpack/webpack.common.babel');

const environments = {
  development: 'dev',
  production: 'prod'
};

const environment = environments[process.env.NODE_ENV || 'development'];
const environmentConfig = require(`./webpack/webpack.config.${environment}`);

module.exports = merge(common, environmentConfig);