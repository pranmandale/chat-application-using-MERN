import React from 'react'
import { FaSearch } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";

function Logout() {
  return (
    <div className='h-[10vh]'>
       <div>
       <BiLogOutCircle className='text-5xl hover:bg-slate-400 duration-300 cursor-pointer rounded-full p-2 ml-4 mt-1'/>
       </div>
    </div>
  )
}

export default Logout
