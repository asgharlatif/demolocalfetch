/*
async function  getData(){

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("response = ", response)

    const data =   response.json();
    console.log("data = ", data)
}


async function  postData(){

    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{

        method : "Post" ,
        body:JSON.stringify( {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem..... my info",
            "completed": false
        }),headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }
    } )


    console.log("response = ", response)
    const data =   response.json();
    console.log("data = ", data)
}


getData();
postData();
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <App />  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



