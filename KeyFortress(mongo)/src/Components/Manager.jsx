import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
// import React from 'react';
import "../App.css"

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({site:"",username:"", password:""})
    const [passwordArray, setpasswordArray] = useState([])
    


  
    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        let passwordArray;
        if(passwords){
           setpasswordArray(JSON.parse(passwords))
        }
    }, [])
    


   const showPassword = () =>{
    passwordRef.current.type = "text"
    //  alert("show the password");
     if(ref.current.src.includes("icons/eye-crossed.png")){
         ref.current.src = "icons/visibility.png"
         passwordRef.current.type = "password"
     }
     else{
        ref.current.src = "icons/eye-crossed.png"
        passwordRef.current.type = "text"
     }
   }

   const savePassword = () =>{
    if(!form.site || !form.username || !form.password){

      toast.error(' 🥺 Fields cannot be empty!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
        });


    }
    else{

      setpasswordArray([...passwordArray, {...form, id:uuidv4()}])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]))
      console.log(passwordArray)
      setform({site:"",username:"", password:""})
        
      toast.success('🤓 Password saved!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
        });
    }



    
   }

   const deletePassword = (id) =>{
    console.log("delete password")
    let c = confirm("Are you sure?")
    if(c){

        setpasswordArray(passwordArray.filter(item=>item.id!==id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
        
        toast.success('👀 Password Deleted!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          // transition: Bounce,
          });
        
    }

    


   }

   const editPassword = (id) =>{
    setform(passwordArray.filter(item=> item.id===id)[0])
    setpasswordArray(passwordArray.filter(item=>item.id!==id))
   }

   const handleForm = (e) =>{
      setform({...form, [e.target.name]: e.target.value})
      
   }

   const copyText = (text) =>{
    toast.success('🙌 Copied Text to clipboard', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
        });
    navigator.clipboard.writeText(text);
   }



  return (

     <>
   



    <div>
      <div className="relative h-full w-full bg-slate-50">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="md:mycontainer bg-slate-50 py-14 ">
          <h1 className="text-4xl font-bold text-center  ">
            <span className="text-yellow-400">&lt;</span>
            Key<span className="text-yellow-400 ">Fortress/ &gt;</span>
          </h1>
          <p className="text-slate-950 text-lg text-center">
            Your own Password Manager
          </p>
        </div>
      </div>
      <div className="  md:mycontainer md:w-1/2  mt-13   md:-mt-14 flex flex-col  text-black gap-6 items-center">

        <input onChange={handleForm}
          className="rounded-full border border-yellow-400  p-14 md:px-80 px-20 py-1 md:w-auto w-full " name="site"
          type="text" placeholder="Enter your website URL"
           value={form.site}
        />

        <div className="flex-col md:flex-row flex md:w-100 justify-between gap-6  ">

          <input onChange={handleForm}
            className="rounded-full border border-yellow-400 p-24 py-1 md:w-auto w-full"
            type="text"
            name="username"
            id="" placeholder="         Enter your Username"
              value={form.username}
          />

          <div className="relative">
          <input  onChange={handleForm}
            className="rounded-full border border-yellow-400 p-24 py-1 md:w-auto w-full"
            type="password" ref={passwordRef}
            name="password"
            id="" placeholder="  Enter your Password" value={form.password}
 
          />
          <span className="absolute right-1 top-0 " onClick={showPassword}>
          <img ref={ref} width={36} src="icons/visibility.png" alt="eye" className="p-2" />
          </span>
          </div>

        </div>
        <button onClick={savePassword} className="flex justify-center items-center bg-yellow-400 hover:bg-yellow-200 rounded-full px-4 md:py-2 py-1 w-fit gap-2 border-2 border-slate-500 font-semibold">
        <lord-icon
          src="https://cdn.lordicon.com/jgnvfzqg.json"
          trigger="hover"
          style={{color:"white"}}
        ></lord-icon>
         Save Password</button>
      </div>

      <div className="passwords md:mycontainer">
        
       

<div className=" overflow-x-auto w-full container px-460 py-20 md:py-6 mx-auto -m-20 md:mr-40  ">
        <h2 className="font-bold md:text-2xl py-3 gap-4">Your Passwords</h2>
        {passwordArray.length === 0 && <div>No passwords to show</div> }

         {passwordArray.length !=0 &&<table className="w-full text-sm text-left rtl:text-right text-white dark:text-gray-400 md:rounded-xl overflow-hidden ">
        <thead className="text-xs text-gray-50 uppercase bg-gray-50 dark:bg-slate-950 dark:text-yellow-300">
            <tr>
                <th scope="col" className="px-8 py-3 ">
                    SITE
                </th>
                <th scope="col" className="px-6 py-3">
                   USERNAME
                </th>
                <th scope="col" className="px-6 py-3">
                    PASSWORD
                </th>
                <th scope="col" className="px-6 py-3">
                    ACTION
                </th>
            
            </tr>
        </thead>
        <tbody>
            {passwordArray.map((item, index)=>{
         return <tr key={index} className="bg-white border-b dark:bg-slate-600 dark:border-white ">
                <th scope="row" className=" flex px-1 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white gap-5">
               <a href={item.site} target="_blank">{item.site}</a>  <img className="w-5 cursor-pointer  hover:invert" src="icons/paste.png" alt="copy" value="text"  onClick={(e)=>{copyText(item.site)}} /> 
                </th>
                <td className="px-8 py-4">
                 <span className="flex gap-4 text-nowrap"> {item.username}  <img className="w-5 cursor-pointer  hover:invert" src="icons/paste.png" alt="copy" onClick={(e)=>{copyText(item.username)}} /> </span>
                </td>
                <td className="px-6 py-4 ">
                <span className="flex gap-4">     {item.password}<img className="w-5 cursor-pointer  hover:invert" src="icons/paste.png" alt="copy"  onClick={(e)=>{copyText(item.password)}}/>  </span>
                </td>   
                <td className=" flex gap-3 w-12 justify-end   m-6">
                  <span className="cursor-pointer  hover:invert"><img src="icons/note1.png" alt="edit" onClick={(e)=>{editPassword(item.id)}}/></span>
                  <span className="cursor-pointer invert hover:invert-0 "><img src="icons/bin.png" alt="edit" onClick={(e)=>{deletePassword(item.id)}}/></span>
                </td>   
            </tr>
          })}
        </tbody>
    </table> }
</div>


      </div>

    </div>

    </>
  );
};

export default Manager;
