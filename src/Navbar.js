import react from "react";
import logos from ".//assets/logos.png";
import profile from ".//assets/profile.png";
import "./navbar.css" ;

function Navbar(){
    return(
        <div >
              
           <nav className="navbar navbar-light bg-lighty navi other">
            <div>
             <a className="navbar-brand" href="#"> </a>
             <img className="profile" src={logos} width="120" height="90" alt="no img"/>
             </div>
             {/* right side */}
             <div>
             <span> GOVE ADMIN</span>
             <img className="" src={profile} width="150" height="100" alt="no img"/>
             </div>
            
           </nav>


        </div>
    )
} 



export default Navbar; 

