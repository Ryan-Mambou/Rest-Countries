import axios from 'axios';
import React from 'react'
import Layout from '../../components/Layout';
import Link from 'next/link';

export async function getServerSideProps( {params} ){
    const code = params.code;
    const data = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
    console.log(data)

    return {
        props: {
            country: data.data
        }
    }
}

function Country({ country }) {

    console.log(country)
  return (
    <div className='bg-gray-100 h-screen w-screen font-nunito'>
    <Layout />

    <div className='w-11/12 mt-20 m-auto'>
    <Link href='/' className='bg-white px-7 cursor-pointer py-1 rounded-lg shadow-md flex flex-row items-center font-light'><a className='flex flex-row bg-white py-1 px-5 items-center rounded-lg w-28'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>Back</a></Link>
    </div>

    <div className='flex flex-col md:grid md:grid-cols-2 w-11/12 m-auto mt-20'>
      
      <div className='md:col-span-1 w-full'>
        <img src={country[0].flags.png} className="w-full md:w-[85%] object-cover h-80"/>
      </div>

{/**Right Box */}
      <div className='flex flex-col justify-between'>
        <h3 className='font-bold text-2xl'>{country[0].name.common}</h3>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-row py-2'>
            <span className='font-medium text-sm'>Native name: <span className='font-light ml-3'>{country[0].name.official}</span></span>
            <span className='ml-10 font-medium text-sm'>Top level Domain:{' '} 
            <span className='font-light ml-3'>
            { country[0].tld.length > 1 ? country[0].tld.map(tld => (
              <span>{tld} </span>
            )): country[0].tld }</span>
            </span>
          </div>

          <div className='flex flex-row py-2'>
            <span className='font-medium text-sm'>Population: <span className='font-light'>{country[0].population}</span></span>
            <span className='ml-10 font-medium text-sm'>Currencies: 
            <span className='font-light ml-3'>{Object.values(country[0].currencies)[0].name}</span>
            </span>
          </div>

          <div className='flex flex-row py-2'>
            <span className='font-medium text-sm'>Region: <span className='font-light ml-3'>{country[0].region}</span></span>
            <span className='ml-10 font-medium text-sm'>Languages: 
            <span className='font-light ml-3'>
            {Object.values(country[0].languages).length > 1 ? Object.values(country[0].languages).map(lan => <span className='ml-2'>{lan}</span>) : Object.values(country[0].languages)[0] }
              </span>
              </span>
          </div>

          <div className='flex flex-row py-2'>
            <span className='font-medium text-sm'>Sub Region: <span className='font-light ml-3'>{country[0].subregion}</span></span>
            <span className='ml-10 font-medium font-sm'>Capital: <span className='font-light ml-3'>{country[0].capital}</span></span>
          </div>
        </div>

        <div>
          <span className='font-bold text-sm'>Border Countries: 
          {country[0].hasOwnProperty('borders') && country[0].borders.length > 0 ? country[0].borders.map(border => 
          <span className='rounded-lg ml-3 shadow-md bg-white py-1 px-2 text-sm font-light'>{border}</span>
          ) : ''}
          </span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Country