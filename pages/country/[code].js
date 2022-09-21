import axios from 'axios';
import React from 'react'
import Layout from '../../components/Layout';

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
    <div className='bg-gray-100 h-screen w-screen'>
    <Layout />
    <div className='flex flex-row w-11/12 m-auto'>
      <div>
        <img src={country[0].flags.png}/>
      </div>

{/**Right Box */}
      <div className='h-full '>
        <h3 className='font-bold text-xl'>{country[0].name.common}</h3>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-row'>
            <span className='font-medium'>Native name: <span className='font-light ml-3'>{country[0].name.official}</span></span>
            <span className='ml-5 font-medium'>Top level Domain:{' '} 
            <span className='font-light ml-3'>
            { country[0].tld.length > 1 ? country[0].tld.map(tld => (
              <span>{tld} </span>
            )): country[0].tld }</span>
            </span>
          </div>

          <div className='flex flex-row'>
            <span className='font-medium'>Population: <span className='font-light'>{country[0].population}</span></span>
            <span className='ml-5 font-medium'>Currencies: 
            <span className='font-light ml-3'>{Object.values(country[0].currencies)[0].name}</span>
            </span>
          </div>

          <div className='flex flex-row'>
            <span className='font-medium'>Region: <span className='font-light ml-3'>{country[0].region}</span></span>
            <span className='ml-5 font-medium'>Languages: 
            <span className='font-light ml-3'>
            {Object.values(country[0].languages).length > 1 ? Object.values(country[0].languages).map(lan => <span className='ml-2'>{lan}</span>) : Object.values(country[0].languages)[0] }
              </span>
              </span>
          </div>

          <div className='flex flex-row'>
            <span className='font-medium'>Sub Region: <span className='font-light ml-3'>{country[0].subregion}</span></span>
            <span className='ml-5 font-medium'>Capital: <span className='font-light ml-3'>{country[0].capital}</span></span>
          </div>
        </div>

        <div>
          <span className='font-medium'>Border Countries: 
          {country[0].borders.length > 0 ? country[0].borders.map(border => 
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