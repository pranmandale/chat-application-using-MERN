import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

function Left() {
  return (
    <div className=' w-[30%] bg-gray-300 text-gray-700'>
      {/* we are creating three components search contacts and logout */}
      <Search/>
      <Users/>
      <Logout/>
    </div>
  )
}

export default Left
