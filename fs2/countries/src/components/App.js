import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Display from './Display.js';
import Filter from './Filter.js';


const App = () => {

    const [ countries, setCountries ] = useState([])
    const [ search, newSearch ] = useState('')

    useEffect(() => {
        console.log('effect')
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log('promise fulfilled')
                setCountries(response.data)
                console.log(countries)
            })
    }, [])

    const handler = (event) => {
        console.log(event.target.value)
        newSearch(event.target.value)
    }

    

   // console.log(countries)

    return (
        <div>
            <Filter filter = {search} handler = {handler}/>
            <Display countries = {countries} search = {search}/>
        </div>
    )
}

export default App
