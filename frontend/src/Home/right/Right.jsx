
import React, { useEffect } from 'react';
import ChatUser from './ChatUser';
import Messages from './Messages';
import TypeSend from './TypeSend';
import UseConversation from '../../zustand/UseConversation.js';
import { useAuth } from '../../context/AuthProvider.jsx';

function Right() {
  const { selectedConversation, setSelectedConversation } = UseConversation();

  useEffect(() => {
    setSelectedConversation(null); // Reset on mount
    return () => setSelectedConversation(null);  // Reset on unmount (if needed)
  }, [setSelectedConversation]);

  return (
    <div className='w-[70%] bg-blue-200 text-gray-700'>
      {
        !selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <ChatUser />
            <div
              className='flex-1 overflow-y-auto custom-scroll'
              style={{ maxHeight: "calc(92vh - 12vh)" }}
            >
              <Messages />
            </div>
            <TypeSend />
          </>
        )
      }
    </div>
  );
}

export default Right;



const NoChatSelected = () => {
  const [authUser] = useAuth(); // Correctly destructure the context array
  console.log(authUser); // This should now correctly log the user object

  return (
    <div className='flex h-screen items-center justify-center'>
      <h1 className='text-center'>
        Welcome <span className='font-semibold text-xl'>{authUser.user.fullname}</span>
        <br />
        No chat selected, please start a conversation by selecting someone from your contacts.
      </h1>
    </div>
  );
};
