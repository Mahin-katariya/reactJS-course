import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter] = useState(0);
  // let counter = 0;

  const addValue = () => {
    if(counter < 20){
      /*setCounter(++counter);
      setCounter(++counter);
      setCounter(++counter);
      setCounter(++counter); */
      // when these many setCounters are passed, React see's it as a repition on the same initial state is being changed so it sends the this entire update in one batch and rather than sending it individually.

      setCounter(counter => counter + 1);
      setCounter(counter => counter + 1);
      setCounter(counter => counter + 1);


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
