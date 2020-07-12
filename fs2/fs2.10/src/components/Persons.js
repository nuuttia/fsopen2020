import React from 'react';


const Persons = ({ persons, newFilter, delName }) => {
    return(
        persons.concat()
        .filter(person => person.name.toLowerCase()
        .includes(newFilter))
        .map(person => <p key={person.name}>{person.name} {person.number} 
            <button 
            type= "button"
            value= {person.id} 
            onClick = {delName}> delete contact </button> </p>)
    )
}

export default Persons