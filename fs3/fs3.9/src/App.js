import React, { useState, useEffect } from 'react'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
import personService from './services/persons.js'
import Notification from './components/Notification.js'


const App = () => {

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setFilter] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        personService
            .getAll()
            .then(response => {
                setPersons(response.data)
            })
    }, [])


    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber
        }

        if (persons.map(a => a.name).indexOf(newName) !== -1) {
            alert(`${newName} is already added to phonebook`)
        } else {
            personService
            .create(nameObject)
            .then(response => {
            setPersons(persons.concat(response.data))
            setErrorMessage(`Added ${nameObject.name}`)
            setTimeout(() => {
                    setErrorMessage(null)
                  }, 5000)
        })
        }

        setNewNumber('')
        setNewName('')
    }

    const delName = (event) => {
        event.preventDefault()

        const pers = persons.find(p => p.id === parseInt(event.target.value))
        console.log(pers)
        personService
            .del(pers)
            .then(response => {
                setPersons(persons.filter(p=> p !== pers))
                setErrorMessage(`Deleted ${pers.name}`)
                setTimeout(() => {
                    setErrorMessage(null)
                  }, 5000)
            })
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
            <Notification message = {errorMessage} />
            <Filter hfc = {handleFilterChange} newFilter = {newFilter}/>
            <h3>add a new</h3>
            <PersonForm handleNumberChange = {handleNumberChange}  handleNameChange = {handleNameChange} addName = {addName} newNumber = {newNumber}  newName = {newName}/>
            <h2>Numbers</h2>
            <Persons persons = {persons} newFilter= {newFilter} delName = {delName}/>
        </div>
    )

}

export default App