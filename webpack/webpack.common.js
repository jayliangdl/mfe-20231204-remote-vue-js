const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require('webpack');

module.exports = (env) => {
  
  return {
    // output: {
    //   publicPath: "http://localhost:8481/",
    // },
  
    resolve: {
      extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
    },
  
    devServer: {
      // port: 8481,
      port: 6002,
      historyApiFallback: true,
    },
  
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.tsx?$/,
          use: [
            "babel-loader",
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
                appendTsSuffixTo: ["\\.vue$"],
                happyPackMode: true,
              },
            },
          ],
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },
  
    plugins: [
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true, // 如果您想使用选项 API，请设置为 true
        __VUE_PROD_DEVTOOLS__: false // 通常在生产环境中应该设置为 false
      }),
      new ModuleFederationPlugin({
        name: "remoteVueJs",
        filename: "remoteVueJsEntry.js",
        remotes: {},
        exposes: {
          './MyVueJSButton':'./src/MyVueJSButton.vue'
        },
        shared: require("../package.json").dependencies,
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
    ],
  }
} 
