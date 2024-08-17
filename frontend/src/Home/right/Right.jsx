import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import TypeSend from './TypeSend'

function Right() {
  return (
    <div className='w-[70%] bg-blue-200 text-gray-700'>
      <ChatUser/>
      <div 
      className='flex-1 overflow-y-auto custom-scroll'
      style={{maxHeight:"calc(92vh - 12vh)"}}>

      <Messages/>
      </div>
      <TypeSend/>
    </div>
  )
}

export default Right
