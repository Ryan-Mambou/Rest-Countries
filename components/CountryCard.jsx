import React from 'react'
import Link from 'next/link'

function CountryCard({ country }) {

  return (
    <Link href={`country/${country.cca2}`}>
    <div className='bg-white shadow-lg rounded-md overflow-hidden h-[25rem] cursor-pointer dark:bg-slate-800 dark:text-white'>
        <img src={country.flags.png} alt='Country card' className=' h-56 w-full object-cover'/>
        <span className='px-3 py-2 block font-bold text-xl '>{country.name.common}</span>
        <span className='px-3 py-2 block'><span className='font-bold'>Popoulation:</span> <span className='font-light'>{country.population}</span></span>
        <span className='px-3 py-2 block'><span className='font-bold'>Region:</span> <span className='font-light'>{country.region}</span></span>
        <span className='px-3 py-2 block'><span className='font-bold'>Capital:</span> <span className='font-light'>{country.capital}</span></span>
    </div>
    </Link>
  )
}

export default CountryCard