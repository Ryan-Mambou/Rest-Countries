import React, { useState } from 'react'
import { FaCaretDown } from "react-icons/fa";

function Filter({handleDropdown, dropdown}) {
  
  const filters = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

  return (
    <div className='relative'>
      <div className='flex flex-row items-center bg-white rounded shadow-lg p-3 text-sm cursor-pointer' onClick={handleDropdown}>
        <span>Filter By Region</span>
        <FaCaretDown className='ml-2'/>
    </div>
    {dropdown &&  
    <div className='absolute bg-white py-2 px-3 w-full z-10 -bottom-40 rounded text-sm cursor-pointer'>
    {filters.map(((filter, index) => (
      <span key={index} className='p-1 block'>{filter}</span>
    )))}
  </div>
  }
    </div>
  )
}

export default Filter