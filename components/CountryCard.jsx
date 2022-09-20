import React from 'react'
import { IoFlagSharp } from 'react-icons/io5';

function CountryCard({ country }) {

  console.log(country)
  return (
    <div className='bg-white shadow-lg  rounded-md overflow-hidden h-[25rem] cursor-pointer'>
        <img src={country.flags.png} alt='Country card h-40 w-full object-cover'/>
        <span className='px-3 py-2 block font-bold text-xl '>{country.name.common}</span>
        <span className='px-3 py-2 block'><span className='font-bold'>Popoulation:</span> <span className='font-light'>{country.population}</span></span>
        <span className='px-3 py-2 block'><span className='font-bold'>Region:</span> <span className='font-light'>{country.region}</span></span>
        <span className='px-3 py-2 block'><span className='font-bold'>Capital:</span> <span className='font-light'>{country.capital}</span></span>
    </div>
  )
}

export default CountryCard