import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import UseSendMessages from '../../context/UseSendMessages.js';

function TypeSend() {


  const [message,setMessage] = useState("")
  const {loading,sendMessages} = UseSendMessages();

  const handlesubmit = async (e) => {
    console.log(e)
    e.preventDefault()
    await sendMessages(message)
    setMessage('')
  }

  return (
   <form onSubmit={handlesubmit}>
    <div className='flex space-x-1 h-[10vh]  bg-blue-300 items-center'>
     <div className='w-[70%] px-4'>
      <input 
      type="text" 
      placeholder="Type here" 
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className=" mt-1 border border-gray-600 bg-slate-300 
      outline-none px-4 py-3 w-full rounded-xl " />
      
    </div>
    <button><IoMdSend className='text-3xl'/></button>
   </div>
   </form>
  )
}

export default TypeSend

// import React, { useState } from "react";
// import { IoSend } from "react-icons/io5";
// // import useSendMessage from "../../context/UseSendMessage.js";
// import UseSendMessage from "../../context/UseSendMessages";

// function Typesend() {
//   const [message, setMessage] = useState("");
//   const { loading, sendMessages } = UseSendMessage();

//   const handleSubmit = async (e) => {
//     console.log(e);
//     e.preventDefault();
//     await sendMessages(message);
//     // setMessage("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="flex space-x-1 h-[8vh]  bg-gray-800">
//         <div className=" w-[70%] mx-4">
//           <input
//             type="text"
//             placeholder="Type here"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="border border-gray-700 rounded-xl outline-none mt-1 px-4 py-3 w-full"
//           />
//         </div>
//         <button>
//           <IoSend className="text-3xl" />
//         </button>
//       </div>
//     </form>
//   );
// }

// export default Typesend;