import React from "react";

const Total = ( {course} ) => {
    const result = course.parts.reduce( (sum, currentValue) => {
        return sum + currentValue.exercises;
    }, 0);

    return (
      <p>Total of {result} exercises</p>
    ) 
}

export default Total;