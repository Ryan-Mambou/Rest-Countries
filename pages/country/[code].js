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
    <div className='flex flex-row'>
      <div>
        <img src={country[0].flags.png}/>
      </div>
      <div></div>
    </div>
    </div>
  )
}

export default Country