import React, { useState } from 'react'
import search_icon from "../src/assets/search.png";
import cloud_icon from "../src/assets/cloud.png";
import humd_icon from "../src/assets/humidity.png";
import wind_icon from "../src/assets/wind.png";
import clear_icon from "../src/assets/clear.png";
import drizzle_icon from "../src/assets/drizzle.png";
import snow_icon from "../src/assets/snow.png";
import rain_icon from "../src/assets/rain.png";

const Weatherapp = () => {
    const api_key="c11dc287f1dae96272760a5d3a46477e";
    const [wic,ic]=useState(cloud_icon);
    const search=async()=>{
        const element=document.getElementsByClassName("searchclass");
        if(element[0].value===""){
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let res=await fetch(url);
        let data=await res.json();
            <div className="humd-perc">63%</div>
            const humidity=document.getElementsByClassName("humd-perc");
            const wind=document.getElementsByClassName("wind-speed");
            const temperature=document.getElementsByClassName("temp");
            const city=document.getElementsByClassName("loc");
            humidity[0].innerHTML=data.main.humidity+"%";
            wind[0].innerHTML=Math.floor(data.wind.speed)+"km/hr";
            temperature[0].innerHTML=data.main.temp+"°C";
            city[0].innerHTML=data.name;
            if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
                ic(clear_icon);
            else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
                ic(wic);
            else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
                ic(drizzle_icon);
            else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
                ic(drizzle_icon);
            else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
                ic(rain_icon);
            else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
                ic(rain_icon);
            else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
                ic(snow_icon);
            else
                ic(clear_icon);
    };
  return (
    <div className='container'>
        <div className='search'>
             <input type="text" placeholder='Search the Weather' className='searchclass'></input>
             <div className='searchicon'>
                <img src={search_icon} alt="" onClick={()=>{search()}}></img>
             </div>
        </div>
        <div>
        <div className="cloudimg">
            <img src={wic} alt=""></img></div>
            <div className="temp">29°C</div>
            <div className="loc">India</div>
        </div>
        <div className="parameters">
        <div className="ele">
            <img src={humd_icon} alt="" className="icon"></img>
            <div className="data">
            <div className="humd-perc">63%</div>
            <div className="content">Humidity</div>
            </div>
        </div>
        <div className="ele">
            <img src={wind_icon} alt="" className="icon"></img>
            <div className="data">
            <div className="wind-speed">13 km/hr</div>
            <div className="content">Windspeed</div>
            </div>
        </div>
        </div>
    </div>
  )
}
export default Weatherapp;
