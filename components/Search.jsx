import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

function Search() {
  return (
    <div className='relative '>
    <input placeholder='Search for a country...' className='text-sm py-3 w-[30rem] rounded placeholder:ml-10 shadow-lg focus:outline-none'/>
    <IoSearchSharp className='absolute bottom-4 left-3 text-gray-400 text-2xl'/>
    </div>
  )
}

export default Search