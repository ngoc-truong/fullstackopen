import React from "react";

const Country = ( {country} ) => {
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
        </>
    )
}
export default Country;