import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import axios from 'axios';
import Cookies from 'js-cookie'

function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async() =>{
    setLoading(true)
    try {
      const res = await axios.post('/api/user/logout')
      localStorage.removeItem('ChatApp');
      Cookies.remove('jwt')
      setLoading(false)
      alert("logout successful")
      window.location.reload();
    } catch (error) {
      console.log("Error : error in logout", error)
    }
  }
  return (
    <div className='h-[10vh]'>
       <div>
       <BiLogOutCircle className='text-5xl hover:bg-slate-400 duration-300 cursor-pointer rounded-full p-2 ml-4 mt-1'
        onClick={handleLogout}
       />
       </div>
    </div>
  )
}

export default Logout
