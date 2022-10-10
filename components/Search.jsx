import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

function Search({handleChange}) {

  return (
    <div className='relative '>
    <input placeholder='Search for a country...' onChange={handleChange}  className='text-sm py-3 md:w-[30rem] w-[15rem] rounded pl-10 shadow-lg focus:outline-none dark:bg-slate-800 dark:text-white'/>
    <IoSearchSharp className='absolute bottom-3 left-3 text-gray-400 text-2xl dark:text-white'/>
    </div>
  )
}

export default Search