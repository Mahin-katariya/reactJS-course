import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter] = useState(0);
  // let counter = 0;

  const addValue = () => {
    if(counter < 20){
      setCounter(++counter);
    }
    console.log("value of counter: ",counter);
    // counter = counter + 1;
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(--counter);
    }
    
    console.log("value of counter: ",counter);
    
  }


  return (
    <>
      <h1>React JS</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
