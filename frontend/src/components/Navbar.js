import React from "react";
import "./Navbar.css"
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    return(
        <div>

    <nav>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <label className="logo"><a href="/">Connect</a></label>
        <ul>
            <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
            
            <li><NavLink activeClassName="active" to="/interview">Interview Experience</NavLink></li>
            <li><NavLink activeClassName="active" to="/halloffame">Hall Of Fame</NavLink></li>
            <li><NavLink activeClassName="active" to="/feedback">Feedback</NavLink></li>
            <li><NavLink activeClassName="active" to="/login">SignIn</NavLink></li>
        </ul>
    </nav>
    
    </div>
    )
}

export default Navbar;