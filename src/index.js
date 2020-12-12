import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import App from './App'
import firebase from './firebase'
import reportWebVitals from './reportWebVitals'

// Init firebase
firebase.init()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
