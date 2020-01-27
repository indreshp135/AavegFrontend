import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Set background color
// const colorCodes = ['#2a34c4', '#2e4800', '#e31a1a', '#e9e9e9', '#ffe399']
// document.getElementsByTagName('body')[0].style.backgroundImage = `linear-gradient(315deg, #000000 0%, ${colorCodes[localStorage.getItem('key')]} 90%)`
document.getElementsByTagName('body')[0].style.backgroundImage = 'url(/images/bg_' + localStorage.getItem('hostel') + '.jpg)';

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
