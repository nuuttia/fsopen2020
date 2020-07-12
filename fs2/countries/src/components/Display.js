import React from 'react';
import OneCountry from './OneCountry.js';



const Display = (props) => {
    
        const s = props.countries.filter(country => 
                    country.name.toLowerCase().includes(props.search.toLowerCase())
                )
        if(s.length == props.countries.length) return (<div></div>)
        else if(s.length < 10 && s.length !== 1) return s.map(country => <p key={country.name}> {country.name} </p>)
            else if(s.length == 1) return <OneCountry country= {s[0]}/>
                else return <p>Too many matches, specify another filter </p>
}


export default Display