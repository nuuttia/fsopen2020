import React, { useState } from 'react'




const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setFilter ] = useState('')


  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject = {
        name: newName,
        number: newNumber
    }
    if(persons.map(a=>a.name).indexOf(newName) != -1){
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
      <form>
         <div>
             filter shown with 
             <input
             value = {newFilter}
             onChange = {handleFilterChange}
             />
         </div>
        <h2>add a new</h2>
      </form>
      <form onSubmit = {addName}>
        <div>
          name: <input 
            value = {newName}
            onChange = {handleNameChange}
          />
        </div>
        <div>
            number: <input
            value = {newNumber}
            onChange = {handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person => person.name.toLowerCase().includes(newFilter)).map(person => <p key = {person.name}>{person.name} {person.number}</p>)}
    </div>
  )

}

export default App