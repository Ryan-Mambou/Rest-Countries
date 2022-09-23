import React from 'react'
import CountryCard from './CountryCard'

function CountryList({countries}) {
  return (
    <div className='w-11/12 m-auto md:grid mt-10 gap-10 md:grid-cols-4 flex flex-col'>
        {countries.map(country => (
            <CountryCard key={country.cca2} country={country}/>
        ))}
    </div>
  )
}

export default CountryList