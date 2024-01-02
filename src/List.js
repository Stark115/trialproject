import React from 'react'
 
function List({ name, age, designation, id }) {
    return (
        <ul key={id}>
            <h3>Details of {name}</h3>
            <li>Age : {age}</li>
            <li>Designation : {designation}</li>
            <li>ID : {id}</li>
        </ul>
    )
}
 
export default List;