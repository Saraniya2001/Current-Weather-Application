import React, { useState } from 'react'
import './Weather.css';
import search_icon from '../assets/search.png';
import cloud_icon from '../assets/cloud.png';
import humidity_icon from '../assets/humidity.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import clear_icon from '../assets/clear.png';
// import { use } from 'react';
import { useEffect } from 'react';


const Weather = () => {

    const[search,setSearch] = useState('Jaffna');
    const [city,setCity] = useState(null);
    
    const getWeatherData = async (e)=>{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=58a2769835d39e89c0cbb8644127f63b&units=metric`);
        let result = await response.json();
        setCity(result);
    }   

    useEffect(()=>{
        getWeatherData();
    },[search])


  return (
    <div className='weather'>  
        <div className='search-bar'>     
            <input type='text' placeholder='Search...' onChange={(e)=>setSearch(e.target.value)}/>
            <img src={search_icon} alt='search'/>
        </div>
        <img src={cloud_icon} alt="" className='weather-icon'/>
        <p className='temperature'>{city?.main?.temp}°C</p>
        <p className='location'>{city?.name}</p>
        <div className='weather-data'> 
            <div className="col">
                <img src={humidity_icon} alt="" />
                <div>
                    <p>{city?.main?.humidity}%</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt="" />
                <div>
                    <p>{city?.wind?.speed}Km/h</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather
