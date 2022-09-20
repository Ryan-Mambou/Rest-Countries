import React from 'react'
import { FaCaretDown } from "react-icons/fa";

function Filter() {
  return (
    <div className='flex flex-row items-center bg-white rounded shadow-lg p-3 text-sm cursor-pointer'>
        <span>Filter By Region</span>
        <FaCaretDown className='ml-2'/>
    </div>
  )
}

export default Filter