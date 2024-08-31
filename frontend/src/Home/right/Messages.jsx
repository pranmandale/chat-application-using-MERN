
import React, { useEffect, useRef } from 'react';
import useGetMessage from '../../context/UseGetMessage.js';  
import Loading from '../../components/Loading.jsx'
import Message from './Message.jsx'


function Messages() {
    const { loading, messages } = useGetMessage();  // Use the hook to get loading and messages state
    // console.log(messages);


    const lastMsgRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            if(lastMsgRef.current) {
                lastMsgRef.current.scrollIntoView({behavior: "smooth"})
            }
        },100)
    },[messages])

    return (
        <div className='flex-1 overflow-y-auto custom-scroll' style={{ minHeight: "calc(92vh - 12vh)" }}>

        {loading?(<Loading/>):(messages.length>0 && messages.map((message) =>(
            <Message key={message._id} message = {message} />
        )))}

          {
            !loading && messages.length === 0 && (
                <div>
                    <p className='text-center mt-[20%]'>Say Hi to start conversation</p>
                </div>
            )
          }
        </div>
    );
}

export default Messages;


