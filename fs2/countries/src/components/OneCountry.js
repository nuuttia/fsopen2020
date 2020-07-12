import React from 'react';


const OneCountry = ({country}) => {
    return (
        <div>
        <h2>
            {country.name}
        </h2>
        <p>
            capital: {country.capital} <br/>
            population: {country.population}
        </p>
        <h3>languages</h3>
            <ul>
            {country.languages.map(lang => <li key= {lang.iso639_1}>{lang.name}</li>)}
            </ul>
            <img src={country.flag} width ="200"></img>
        </div>
    )
}

export default OneCountry