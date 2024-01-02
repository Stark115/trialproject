import React from 'react'
import data from '../data.json'
 
import Search from '../Components/Search'
import List from '../Components/List';
 
function Logic() {
    return (
        <div>
            <Search />
            {
                data.map((element) => {
                    console.log(element);
                return(    
                    <List
                    name={element.name}
                    age={element.age}
                    designation={element.designation}
                    id={element.id}
                    />
                )
                })
            }
        </div>
    )
}
 
export default Logic;