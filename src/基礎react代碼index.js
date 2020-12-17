// 假設index.js還是入口文件
console.log('fuckyou')

//導入的時候，接收的成員名稱必須這麼寫
import React from 'react'//創建元件，虛擬DOM元素，生命週期
import ReactDOM from 'react-dom'//把創建好的元件和虛擬DOM放到畫面上展示

//參數1:創建的元素類型，字串，表示元素的名稱
//參數2:是一個對象或null，表示當前這個DOM的屬性
//參數3:子節點(包括其他虛擬DOM獲取本文子節點)
//參數n:其他子節點

//This is a Big H1
// const myh1 = React.createElement('h1',{id:'myh1',title:'thsish1'},'THis is a Big H1')
// const mydiv = React.createElement('div',null,'ths is a div element')

const mydiv = <div id="mydiv" title="div AAA">這是一個DIV元素</div>

//渲染畫面上的DOM結構，最好的方式，就是寫HTML
//參數1:要渲染的那個虛擬DOM
//參數2:指定畫面上一個容器
ReactDOM.render(mydiv,document.getElementById('app'))
