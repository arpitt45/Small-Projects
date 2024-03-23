import { useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Manager from './Components/Manager'
import Footer from './Components/Footer'

import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {

  useEffect(() => {
  
    setTimeout(() => {
      toast('❤️ Visit MyPortfolio for more such projects!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
    }, 2000);
  }, [])
  


  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
      <Manager/>
        </div> 
        <Footer/>

     </>   
  )
}

export default App
