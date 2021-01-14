
import './App.css';
import React, { useEffect, useState } from 'react';
 

function App() {

    //let data = {title:"Waiting for Data"} ;
    let [data1,setData1] = useState({title:"Waiting for Data 1"});
    let [isLit, SetLit] = useState(0);

    useEffect(()=> {
        async function fetchData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/3')
        console.log("response = ", response)
        SetLit(1);
        data1 = await response.json();
        setData1(data1);
    }

    fetchData();

    },[isLit]);

  return (

    <div>

    Hello World

    
    <br />
    <span>isLit = {isLit}</span>

    <br />
    <span>data1_Title = {data1.title}</span><br />
    <span>data1_userId = {data1.userId}</span>

    </div>
  );
}

export default App;
