import React, { useState, useEffect } from 'react'
import { IoMoon } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { useTheme } from 'next-themes';

function Layout() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={`bg-white shadow-lg w-full dark:bg-slate-800 dark:text-white`}>
       <div className='flex flex-row w-11/12 m-auto justify-between items-center py-7'>
        <h1 className='md:text-2xl text-lg font-bold'>Where in the world?</h1>
        <span>
            {theme === 'light' ? <span onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='flex flex-row items-center cursor-pointer'><IoMoon className='mr-2 text-2xl'/> <span className='font-medium'>Dark Mode</span></span>
            : <span onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='flex flex-row items-center cursor-pointer'><IoIosSunny className='mr-2 text-2xl'/> <span className='font-medium'>Light Mode</span></span>
            }
        </span>
        </div> 
    </div>
  )
}

export default Layout