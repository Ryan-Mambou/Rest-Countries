import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";

function Search({handleChange}) {

  return (
    <div className='relative '>
    <input placeholder='Search for a country...' onChange={handleChange}  className='text-sm py-3 w-[30rem] rounded pl-10 shadow-lg focus:outline-none'/>
    <IoSearchSharp className='absolute bottom-3 left-3 text-gray-400 text-2xl'/>
    </div>
  )
}

export default Search