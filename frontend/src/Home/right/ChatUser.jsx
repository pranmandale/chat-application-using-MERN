import React from 'react'

function ChatUser() {
    return (
        <div className='flex space-x-3 h-[10vh] items-center justify-center bg-blue-300'>
            <div className="avatar online">
                <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>

            <div>
                <h1 className='text-xl'>Pranav</h1>
                <span className='text-sm'>Offline</span>
            </div>
        </div>
    )
}

export default ChatUser
