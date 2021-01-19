
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

    let data = {title:"Waiting for Data"} ;

    let [todo,setTodo] = useState(data);

    let [isData, setData] = useState(false);

    let [isFetching, SetFetching] = useState(false);

    useEffect(()=> {

        async function fetchData(){
        SetFetching(true)  

        const response = await fetch('https://jsonplaceholder.typicode.com/todos/3')
        console.log("response using fetch inside useEffect = ", response)    

        let data2 = await response.json();

        setTodo(data2);   

        SetFetching(false)  
    }

    fetchData();

    },[isData]);

    
  if (isFetching){
      return  <div>  Fetching In Progress.....................   </div>
  }


  return (

    <div>

    Hello World . Slow down the Network to see the effect of useEffect.. <br />
    <br />
    This project is using following 
    <ul>
      <li>aSync React useEffect To Fetch-Get (Completed) e.g (Note:- Fetched from Dummy API (https://jsonplaceholder.typicode.com/todos/3))</li>
      <li>aSync React useEffect To Fetch-Post (To Be Completed)</li>
    </ul>
    
    <br />
    <span>Field Name =[Title] = Fetched Value = <b> [{todo.title}] </b> </span><br />
    <span>Field Name =[UserId] = Fetched Value = <b> [{todo.userId}] </b></span><br />    

    <br></br>

    

    </div>
  );
}

export default App;
