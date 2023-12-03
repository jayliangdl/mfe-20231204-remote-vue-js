const { merge } = require('webpack-merge')

module.exports = (envVars) => {
  const { env } = envVars
  const envConfig = require(`./webpack.${env}.js`);
  const commonConfig = require('./webpack.common.js');
  const config = merge(commonConfig(envConfig), envConfig['webpackConfig'])
  return config
}