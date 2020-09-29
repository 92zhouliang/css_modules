const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const mode=process.env.NODE_ENV;

module.exports = {
    entry: path.resolve(__dirname,'../src/index.js'), //相对路径
    output: {
        path: path.resolve(__dirname, '../dist'), //打包文件的输出路径
        filename: 'bundle.js' //打包文件名
    },
    module: {
        rules:[
            {
                test: /(\.jsx|\.js|\.tsx|\.ts)$/, 
                loader: 'babel-loader', 
                query: { //babel的配置参数，也可以写在.babelrc文件中
                    presets: ['@babel/preset-react']
                }
            },{
                test: /(\.css|\.less)$/,
                oneOf:[
                    {
                        resourceQuery: /modules/,
                        use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    hmr: mode === 'development' ? true : false
                                }
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: {
                                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                                    },
                                },
                            },
                            'postcss-loader'
                        ]
                    },
                    {
                        use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    hmr: mode === 'development' ? true : false
                                }
                            },
                            {
                                loader: 'css-loader',
                            },
                            'postcss-loader'
                        ]
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"../public/index.html"), //指定模板路径
            filename: 'index.html', //指定文件名
        }),
        new BrowserSyncPlugin({//这里项目小，直接监听打包后的项目文件启动brower
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] }
        })
    ]
}