import React, {useState, useEffect} from "react";
import axios from "axios";

const Country = ( {country} ) => {
    const [weather, setWeather] = useState([]);

    const params = {
        access_key: process.env.REACT_APP_API_KEY,
        query: country.capital,
    }

    const hookWeather = () => {
        axios
          .get("http://api.weatherstack.com/current", {params})
          .then( (response) => {
            setWeather(response.data.current);
        })
    }

    useEffect(hookWeather, []);

    return (
        <>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages:</h3>
            <ul>
                {country.languages.map ( (language, i) => {
                    return <li key={i}>{language.name}</li>
                })}
            </ul>
            <img style={ {maxWidth: 400} } src={country.flag} alt="flag"></img>

            <h3>Weather in {country.capital}</h3>
            <p>Temperature: {weather.temperature}°C</p>
            <img src={weather.weather_icons} alt="weather"></img>
            <p>Wind: {weather.wind_speed}mph, direction {weather.wind_dir}</p>
        </>
    )
}
export default Country;