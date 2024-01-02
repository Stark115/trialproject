import React, { useState,useEffect } from "react";
import axios from "axios";
  





function Sample(){

    const [posts,setPosts]=useState(null)

    // useEffect(() =>{
        

    // })

    // "https://jsonplaceholder.typicode.com/posts"

    useEffect(() =>{
        axios.get("https://reqres.in/api/users?page=2%22")
        .then(res =>{
            setPosts(res.data)
        }

        )

    },[])

    // useEffect(() =>{

    // },[name])


    return(
        <div className="App">
            <div className="container">
                {
                    posts ? (

                       posts.map((stark)=>{
                        <div className="card" key={stark.id}>
                            <div className="card-body">
                                <h5 className="card-title">{stark.email}</h5>
                                {/* <p className="card-text">{stark.body}</p> */}
                            </div>
                        </div>
                       })
                    ):(
                        <h1>No Data </h1>

                    )
                }

            </div>
            
        </div>
    )
}


export default Sample;

// class Samples{
//     render(){
//         return(
//             <div>
//               <h1> stark</h1>
//             </div>

//         )
//     }
// }

