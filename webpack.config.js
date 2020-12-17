const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
})

//webpack預設只能打包.js文件
module.exports = {
    mode:'development',
    plugins:[
        htmlPlugin
    ],
    module:{//所有第三方module設定
        rules:[
            {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},//千萬別忘記增加exclude排除項目
        ]
    }

}