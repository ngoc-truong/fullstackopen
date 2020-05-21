import React from "react";

const PersonForm = (props) => {
    return (
        <form onSubmit={props.add}>
            <div>
                Name: <input 
                        value={props.name}
                        onChange={props.handleNameChange}/>
            </div>
            <div>
                Number: <input 
                        value={props.number}
                        onChange={props.handleNumberChange} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default PersonForm;