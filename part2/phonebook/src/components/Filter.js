import React from "react";

const Filter = (props) => {
    return (
        <div>
            Filter shown with: <input 
                                value={props.search}
                                onChange={props.handleSearchChange}
                                />
        </div>
    )

}

export default Filter;