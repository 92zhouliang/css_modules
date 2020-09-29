const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");


module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"), //相对路径
  output: {
    path: path.resolve(__dirname, "../dist"), //打包文件的输出路径
    filename: "bundle.js", //打包文件名
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js|\.tsx|\.ts)$/,
        loader: "babel-loader",
        query: {
          //babel的配置参数，也可以写在.babelrc文件中
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /(\.less|\.css)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader?modules",
            options: {
                modules: {
                    localIdentName: "[path][name]-[local]-[hash:5]"
                }
             }
          },
          {
            loader: "less-loader",
            options: {
            //   javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"), //指定模板路径
      filename: "index.html", //指定文件名
    }),
    new BrowserSyncPlugin({
      //这里项目小，直接监听打包后的项目文件启动brower
      host: "localhost",
      port: 3000,
      server: { baseDir: ["dist"] },
    }),
  ],
};
