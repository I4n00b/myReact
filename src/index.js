import React from 'react'
import ReactDOM from 'react-dom'

let a = 10
let str = '你好，台灣'
let boo = true
let title = '999'
const h1 = <h1>紅火火恍恍惚惚</h1>
const arr=[
    <h2>這是H2</h2>,
    <h3>這是h3</h3>
]

ReactDOM.render(<div>
    {a+2}
    <hr/>
    {str}
    <hr/>
    {boo ? '條件為true' : '條件為false'}
    <hr/>
    <p title={title}>這是p標籤</p>
    {h1}
    {arr}
</div>,document.getElementById('app'))
