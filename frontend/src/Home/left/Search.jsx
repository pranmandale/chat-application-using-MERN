

import React from 'react'
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className='px-5 py-4'>
      <form>
        <div className='flex space-x-3'>
          <label className="border-[1px] border-gray-700 bg-slate-300 rounded-lg p-3 flex items-center gap-2 w-[90%]">
            {/* Apply a consistent background color and text color to the input field */}
            <input 
              type="text" 
              className="grow outline-none bg-slate-300 text-gray-700 placeholder-gray-500" 
              placeholder="Search" 
            />
          </label>
          <button type="submit">
            <FaSearch className='text-5xl p-2 hover:bg-gray-400 rounded-full duration-200' />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search
