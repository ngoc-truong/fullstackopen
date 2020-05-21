import React, {useState} from 'react';
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567"}, 
    { name: "Ada Lovelace", number: "39-44-5323523"},
    { name: "Dan Abramov", number: "12-43-234345"},
    { name: "Mary Poppendieck", number: "39-23-541234"},
  ]);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  }

  const contactsToShow = persons.filter( (person) => person.name.toLowerCase().includes(newSearch.toLowerCase()));

  const addContact = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    }

    if (persons.some( (person) => person.name === newName)){
      alert(`${newName} is already added to phonebook.`);
    } else {
      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewNumber("");
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
        add={addContact}
        name={newName}
        number={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons 
        contactsToShow={contactsToShow}
      />
    </div>
  )
}

export default App;
