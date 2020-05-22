import React from "react";

const Persons = (props) => {
    return(
        <div>
            {props.contactsToShow.map( (person) => 
                <div key={person.id}>
                    <p key={person.id}>{person.name}: {person.number}</p>
                    <button onClick={() => props.deletePerson(person.id)}>Delete Person</button>
                </div>
            )}
        </div>
    )
}
export default Persons;