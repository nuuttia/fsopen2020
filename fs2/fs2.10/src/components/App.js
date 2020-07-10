import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter.js'
import PersonForm from './PersonForm.js'
import Persons from './Persons.js'



const App = () => {

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setFilter] = useState('')

    useEffect(() => {
        console.log('effect')
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data)
            })
    }, [])

    const addName = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
        const nameObject = {
            name: newName,
            number: newNumber
        }
        if (persons.map(a => a.name).indexOf(newName) !== -1) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(nameObject))
        }
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter hfc = {handleFilterChange} newFilter = {newFilter}/>
            <h3>add a new</h3>
            <PersonForm handleNumberChange = {handleNumberChange}  handleNameChange = {handleNameChange} addName = {addName} newNumber = {newNumber}  newPerson= {newName}/>
            <h2>Numbers</h2>
            <Persons persons = {persons} newFilter= {newFilter}/>
        </div>
    )

}

export default App