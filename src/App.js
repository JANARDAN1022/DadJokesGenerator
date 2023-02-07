import React,{useState} from 'react';
import './index.css'

const App = () => {
 const ApiKey= "vsKxWIBK2dv/5henuEb5yQ==M2JFIIkSYGJYDnnY";
 const [joke,setjoke]=useState('');

 const handleclick = async ()=>{
 try{
  const response = await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=' + 1,{
    headers:{'x-Api-Key':ApiKey}
  });
  const data = await response.json();
    setjoke(data[0].joke);
 } catch (error){
  console.log(error);
 }
}
  return (
    <div className='main'>
     <h1 className='H1'>Dad Joke Generator</h1>
     <p className='P'>{joke||"DAD JOKE"}</p>
     <button onClick={handleclick} className='BTN'>GENERATE DAD JOKE</button>
    </div>
  )
}

export default App;