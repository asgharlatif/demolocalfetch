import './App.css';

function Lfc() {

async function  getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("response using fetch getData = ", response)
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
    console.log("response using Fetch Post = ", response)
    const data =   response.json();
    console.log("data = ", data)
}

getData();
postData();
  

return (
    <div>
      
    Hello World. This is Simple Fetch and below functionality can be seen in Console
      <ul>
        <li>GetData</li>
        <li>PostData</li>
        </ul> 
     <br /> 
    </div>
  );

}
export default Lfc;