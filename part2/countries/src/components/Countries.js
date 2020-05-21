import React, {useState} from "react";
import Country from "./Country";

const Countries = ( {countriesToShow} ) => {
    const [countries, setCountries] = useState(countriesToShow);
    console.log(countries); // warum []???
    // Mhh, ich muss irgendwie countriesToShow in einen State reinpacken
    // Damit der "Klick" auf ein Land funktioniert.

    const handleClick = (event) => {
        console.log(event.target.value);
    }

    if (countriesToShow.length > 10) {
        return <p>Too many matches, specify another filter.</p>
    } else if (countriesToShow.length === 1) {
        return <Country country={countriesToShow[0]} />
    } else {
        return (
            <div>
                {countriesToShow.map( (country, index) => {
                    return (
                        <div key={index}>
                            <p>{country.name}</p>
                            <button 
                                onClick={handleClick}
                                value={country.name}>
                                    show
                            </button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Countries;