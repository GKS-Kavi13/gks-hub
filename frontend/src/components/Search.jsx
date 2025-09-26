import React, { useState } from 'react'

const Search = ({fetchWeather}) => {
    const [city, setCity] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(city.trim()){
            fetchWeather(city);
            setCity('');
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter city name' className='w-full p-2 border border-gray-300 rounded-lg outline-none ' value={city} onChange={(e)=>setCity(e.target.value)}/>
        <button type='submit' className='mt-4 w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-md cursor-pointer'>Search</button>
    </form>
  )
}

export default Search