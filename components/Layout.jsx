import React, { useState } from 'react'
import { IoMoon } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";

function Layout({toggleDarkMode, darkMode}) {

  return (
    <div className={`bg-white shadow-lg w-full dark:bg-slate-800 dark:text-white ${darkMode && 'dark'}`}>
       <div className='flex flex-row w-11/12 m-auto justify-between items-center py-7'>
        <h1 className='text-2xl font-bold'>Where in the world?</h1>
        <span>
            {!darkMode && <span onClick={toggleDarkMode} className='flex flex-row items-center cursor-pointer'><IoMoon className='mr-2 text-2xl'/> <span className='font-medium'>Dark Mode</span></span>}
            {darkMode && <span onClick={toggleDarkMode} className='flex flex-row items-center cursor-pointer'><IoIosSunny className='mr-2 text-2xl'/> <span className='font-medium'>Light Mode</span></span>}
        </span>
        </div> 
    </div>
  )
}

export default Layout