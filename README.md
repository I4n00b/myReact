# myReact

This is my first React pratice

Just a pratice

#啟用jsx語法


 # 安裝HtmlWebPackPlugin
    const path = require('path')
    const HtmlWebPackPlugin = require('html-webpack-plugin')

    const htmlPlugin = new HtmlWebPackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
    })

    module.exports = {
    mode:'development',
    plugins:[
     htmlPlugin   
    ]
    }
   
 
 # 安裝babel套件
    注意babel-loader版本
    npm i babel-core babel-loader@7 babel-plugin-transform-runtime -D
    npm i babel-preset-env babel-preset-stage-0 -D
 # 安裝能夠識別轉換jsx語法的包baabel-preset-react
    npm i babel-preset-react -D
 # 增加.bablerc配置文件
    {
    "presets": ["env", "stage-0", "react"],
    "plugins": ["transform-runtime"]  
    }
  
  
  
