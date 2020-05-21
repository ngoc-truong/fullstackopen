import React from "react";

const Persons = (props) => {
    return(
        <div>
            {props.contactsToShow.map( (person, index) => 
                <p key={index}>{person.name}: {person.number}</p>
            )}
        </div>
    )
}
export default Persons;