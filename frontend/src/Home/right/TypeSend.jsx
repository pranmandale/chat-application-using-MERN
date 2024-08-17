import React from 'react'
import { IoMdSend } from "react-icons/io";

function TypeSend() {
  return (
   <div className='flex space-x-1 h-[10vh]  bg-blue-300 items-center'>
     <div className='w-[70%] px-4'>
      <input type="text" placeholder="Type here" className=" mt-1 border border-gray-600 bg-slate-300 
      outline-none px-4 py-3 w-full rounded-xl " />
      
    </div>
    <button><IoMdSend className='text-3xl'/></button>
   </div>
  )
}

export default TypeSend
