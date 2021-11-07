import React from "react";
import "./Navbar.css"
import style from '../assets/css/Nav.module.css'
import { NavLink } from 'react-router-dom';

import logo from "../assets/img/nav/logo.png";
const Navbar=()=>{
    return(
        <div>

    <nav>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <a href="/">
        <img className={`${style.logo}`} src={logo} alt="logo"></img>
   </a>
        {/* <label class="logo">Connect</label> */}
        {/* <label className="logo">Connect</a></label> */}
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