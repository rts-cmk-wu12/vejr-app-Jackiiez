import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router';


function Weather() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = 'e4a306dfbca1bb596ce5adf5e4cf5d00'; 
        const city = 'London,uk'; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;

        console.log("Fetching weather data from:", url); 

        fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        })


        //fejl behandling
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setWeather(data);
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                setError(error.message);
            });
    }, []);

    return (
        <div className="weather-section">
            <h2>Vejer i London</h2>
            {error && <p>Fejl: {error}</p>}
            {weather ? (
                <div className="weather-info">
                    <h3>{weather.name}</h3>
                    <p>Temperatur: {weather.main.temp} °C</p>
                    <p>Vejer beskrivelse: {weather.weather[0].description}</p>
                    <p>fugtighed: {weather.main.humidity}%</p>
                    <p>Vind fart: {weather.wind.speed} m/s</p>
                </div>
            ) : (
                <p>Loader data</p>
            )}
        </div>
    );
}

export default Weather;

