import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Details() {
    const { by } = useParams();
    const [vejr, setVejr] = useState(null);
    const [fejl, setFejl] = useState(null);

    useEffect(() => {
        const apiKey = 'e4a306dfbca1bb596ce5adf5e4cf5d00';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${by}&APPID=${apiKey}&units=metric`;

        console.log("Fetching weather data from:", by);

        fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }

        })

            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setVejr(data);
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                setFejl(error.message);
            });
    }, [by]);
    console.log(vejr)
    return (
        <div className="weather-section">
            <h2>Vejr {by}</h2>
            {fejl && <p>Error: {fejl}</p>}
            {vejr ? (
                <div className="weather-info">
                    <h3>{vejr.name}</h3>
                    <p>Temperature: {vejr.main.temp} °C</p>
                    <p>Føles som: {vejr.main.feels_like} °C</p>
                    <p>Top grader: {vejr.main.temp_max} °C</p>
                    <p>Laveste grader: {vejr.main.temp_min} °C</p>
                    <p>Vejr: {vejr.weather[0].description}</p>
                    <p>Fugtighed: {vejr.main.humidity}%</p>
                    <p>Vind hastighed: {vejr.wind.speed} m/s</p>
                    <p>Latitude: {vejr?.coord.lat} </p>
                    <p>Longditude: {vejr?.coord.lon} </p>

                    <img
                        src={`https://openweathermap.org/img/wn/${vejr.weather[0].icon}@2x.png`}
                        alt={vejr.weather[0].description}
                    />
                </div>
            ) : (
                <p>Indlæser Vejr data...</p>
            )}
        </div>
    );
}

export default Details;


