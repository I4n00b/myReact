const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
})


module.exports = {
    mode:'development',
    plugins:[
        htmlPlugin
    ]
}