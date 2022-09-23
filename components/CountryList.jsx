import React from 'react'
import CountryCard from './CountryCard'

function CountryList({countries}) {
  return (
    <div className='w-11/12 m-auto grid mt-10 gap-10 md:grid-cols-4 grid-cols-2'>
        {countries.map(country => (
            <CountryCard key={country.cca2} country={country}/>
        ))}
    </div>
  )
}

export default CountryList