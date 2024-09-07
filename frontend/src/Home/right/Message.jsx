import React from 'react'

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"))
  const Itsme = message.senderId === authUser.user._id;

  const chatName = Itsme?"chat-end": "chat-start"
  const chatColor = Itsme?"bg-blue-900":"bg-gray-600"
  
  console.log(Itsme)
  return (
    <div>
      <div className='p-4'>
        <div className={`chat ${chatName}`}>
          <div className={`chat-bubble ${chatColor}`}>{message.message}</div>
        </div>        
      </div>
    </div>
  )
}

export default Message



