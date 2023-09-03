import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import SpeedIcon from '@mui/icons-material/Speed';
// weather backgrounds
import snowyBg from '../images/snowy_bg.jpg';
import mildChilyyBg from '../images/chilyy_bg.jpg';
import moderateBg from '../images/mild_bg.jpg';
import cloudyBg from '../images/cloudy_bg.avif';
import partiallySunny from '../images/partially_sunny.avif';
import hotBg from '../images/sunny_bg.jpg';
const Main = () =>{
    // js here
    // typingInput State
    const[userText,setUserText] = useState("");
    const[userFinalText,setUserFinalText] = useState("Karachi");
    const submitUserFinalText = (e) =>{
        e.preventDefault();
        setUserFinalText(userText);
    }
    // state for latitudes and longitudes
    const[coordinates ,setCoordinates] = useState({
        locationName :"",
        latitude : "",
        longitude : ""
    });
    // dataHolding state
    const[weatherData ,setWeatherData] = useState();
    const[weatherDesc ,setWeatherDesc] = useState();
    const[windData ,setWindData] = useState();
    // fetching api data
    // first fetching latitudes and longitudes with geocoding API
    const fetchLatsLongs = async () =>{
        try{
            const incomingRawData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userFinalText}&limit=1&appid=54bd14e89587fb7795f92a50e7b484e7`);
            const jsonData = incomingRawData.json();
            return jsonData;
        }
        catch(error){
            console.log(`Error contacting geocoding Api! Error : ${error}`);
        }
    }    

    const fetchApiData = async () =>{
        try{
            const incomingRawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=54bd14e89587fb7795f92a50e7b484e7&units=metric`);
            const jsonData = incomingRawData.json();
            return jsonData;
        }
        catch(error){
            alert(`Error Contacting Weather Api! Error : ${error}`);
        }
    }
    
    useEffect(()=>{
        fetchLatsLongs().then((incomingData)=>{
            setCoordinates(()=>{
                return{
                    locationName : incomingData[0].name,
                    latitude : incomingData[0].lat,
                    longitude : incomingData[0].lat
                };
            });
            // console.log(incomingData[0].name);
            // console.log(incomingData[0].lat);
            // console.log(incomingData[0].lon);
        });
    },[userFinalText]);

    
    useEffect(()=>{
        fetchApiData().then((incomingData)=>{
            // this main is an object so state variable will be holding an object
            setWeatherData(incomingData.main);
            // this weather is an array so state variable will be holding an array
            setWeatherDesc(incomingData.weather);
            // wind object is directly stored in a simple state object
            setWindData(incomingData.wind);
            // console.log(incomingData.weather);
            // console.log(incomingData);
            // console.log(incomingData.main);
        });
    },[coordinates]);
    // console.log(weatherData);
    useEffect(()=>{
        alert('This weather app is designed to provide weather updates of major locations so dont use it for small and precise locations sets 😃 ');
    },[]);

  return(
    <>
        <section>
            <div className='container'>
                <div className='weatherCard'>
                    <div className='inputArea d-flex align-items-center justify-content-center'>
                        <input value={userText} onChange={ (e)=>{ setUserText(e.target.value) } } type='text' className='typingInput'/>
                        <span 
                        onClick={submitUserFinalText}
                        className='glassIcon'
                        >
                            <SearchRoundedIcon/>
                        </span>
                    </div>
                    <div className='weatherInfoArea d-flex align-items-baseline justify-content-around'>
                        <h2 className='text-center text-white'>{coordinates.locationName}</h2>
                        {weatherDesc ? <p className='ms-2 weatherDescText'>{weatherDesc[0].description}</p> : null}
                        
                    </div>
                    { weatherData  ? 
                        <div className='mt-3 tempHolder d-flex align-items-center justify-content-around flex-column'>
                            {/* <span>Current Temp: </span>
                            <span>Min :</span>
                            <span>Max :</span> */}
                            <h1 className='text-white'> 🌡️ {weatherData.temp}°C</h1>
                            <p>Min: {weatherData.temp_min}°C / Max: {weatherData.temp_max}°C</p>
                            <h5 className='mt-2'>Wind Speed <SpeedIcon/>: {windData.speed}m/s</h5>
                            <div className='mt-3 flexer d-flex align-items-center justify-content-between'>
                                    <div className='humidity'>
                                        <h5>💧Humidity</h5>
                                        <p className='text-center'>{weatherData.humidity}%</p>
                                    </div>
                                    <div className='pressure ms-5'>
                                        <h5>Pressure <AvTimerIcon/></h5>
                                        <p className='text-center'>{weatherData.pressure} Pa</p>
                                    </div>
                            </div>
                            
                        </div>
                     : <p>Data not found</p>}
                     
                    

                </div>
            </div>
        </section>
    </>
  );
}
export default Main;