import React from 'react'

function User() {
  return (
    <div>
      <div className='flex space-x-4 px-8 py-3 hover:bg-slate-400 duration-300 cursor-pointer rounded-md'>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>

                <div>
                    <h1 className='font-bold '>Pranav</h1>
                    <span>pranav@gmail.com</span>
                </div>
            </div>
    </div>
  )
}

export default User
