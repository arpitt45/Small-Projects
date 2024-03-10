import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incValue = () =>{
    setCount(count+1);
  }

  const decValue = () =>{
    if(count===0){
      alert("Counter Can't be negative")
    }else{
      setCount(count - 1);
    }
   
  }

  return (
    <>
      <h1>Basic Counter to learn hooks</h1>
      <h2>Counter: {count}</h2>

      <button onClick={incValue}>Increase Value</button>
      <br /> <br />
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
