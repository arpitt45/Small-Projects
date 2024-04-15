import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './assets/Components/Message'

function App() {
  const [c, setCount] = useState(0)

  return (
    <>
      <Message/>
    </>
  )
}

export default App
