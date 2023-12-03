const webpack = require('webpack');

module.exports = {
  /**webpack专属的配置放在这里*/
  webpackConfig:{
    mode: 'development',
    
    devServer: {
      hot:true
    },
    devtool: 'cheap-module-source-map',
    plugins : [
      new webpack.DefinePlugin({
        'process.env.name':JSON.stringify('dev')
      }),
    ]
  },
  /**应用自己的配置放在这里*/
  appConfig:{
    
  }
}