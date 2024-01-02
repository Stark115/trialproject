import { useRef } from 'react';
import "./search.css";



function Search() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    console.log(inputRef)
  }

  return (
    <div id="search">
      <input placeholder="Enter here" ref={inputRef} />
      <button onClick={handleClick} id="btnn">
        Search
      </button>
    </div>
  );
}


export default Search;

// import React from 'react'
 
 
//     function Search() {
//         return (
//             <div>
//                 <nav class="navbar bg-body-tertiary">
//                     <div class="container-fluid">
//                         <form class="d-flex" role="search">
//                             <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button class="btn btn-outline-success" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </nav></div>
//         )
//     }
 
// export default Search;