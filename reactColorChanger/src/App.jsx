import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap gap-4 shadow-lg bg-white rounded-3xl px-3 py-2'>
            <button onClick={()=>{setColor("red")}} className='outline-none px-4 text-black rounded-full shadow-lg font-bold' style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>{setColor("olive")}} className='outline-none px-4 text-black rounded-full shadow-lg font-bold' style={{backgroundColor:"olive"}}>olive</button>
            <button onClick={()=>{setColor("blue")}} className='outline-none px-4 text-black rounded-full shadow-lg font-bold' style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>{setColor("green")}} className='outline-none px-4 text-black rounded-full shadow-lg font-bold' style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>{setColor("yellow")}} className='outline-none px-4 text-black rounded-full shadow-lg font-bold' style={{backgroundColor:"yellow"}}>yellow</button>
            <button onClick={()=>{setColor("purple")}} className='outline-none px-4 text-black rounded-full shadow-lg font-bold' style={{backgroundColor:"purple"}}>purple</button>
            <button onClick={()=>{setColor("lavender")}}  className='outline-none px-4 text-black rounded-full shadow-lg font-bold' style={{backgroundColor:"lavender"}}>lavender</button>
          </div>
         </div> 

      </div>
       
    </>
  )
}

export default App
