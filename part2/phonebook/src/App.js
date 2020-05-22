import React, {useState, useEffect} from 'react';
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [persons, setPersons] = useState([]);

  // Populate data after rendering for the first time.
  useEffect( () => {
    personService 
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
  }, []);

  // Form change handlers
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  }

  // CRUD methods
  const contactsToShow = persons.filter( (person) => person.name.toLowerCase().includes(newSearch.toLowerCase()));

  const addPerson = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    }

    if (persons.some( (person) => person.name === newName)){
      const userWantsToUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`);
      if (userWantsToUpdate) {
        const person = persons.find( (person) => person.name === newName);
        updatePerson(person.id, nameObject);
      }
    } else {
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
        })
    }
  }

  const updatePerson = (id, newObject) => {
    const person = persons.find( (person) => person.id === id); 
    personService 
      .update(person.id, newObject)
      .then( (returnedPerson) => {
        const newPersonsArray = persons.map( (person) => person.id !== id ? person : returnedPerson);
        setPersons(newPersonsArray);
      })
  }


  const deletePerson = (id) => {
    const index = persons.findIndex( (person) => person.id === id);
    const person = persons.find( (person) => person.id === id);
    const userWantsToDelete = window.confirm(`Do you really want to delete ${person.name}`)

    if (userWantsToDelete) {
      const personsCopy = [ ...persons ];
      personsCopy.splice(index, 1);

      personService
        .deleteIt(id)
        .then( () => {
          setPersons(personsCopy);
        })
    } else {
      return;
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        search={newSearch} 
        handleSearchChange={handleSearchChange}
      />

      <h2>Add a New Contact</h2>
      <PersonForm 
        add={addPerson}
        name={newName}
        number={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons 
        contactsToShow={contactsToShow}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App;
