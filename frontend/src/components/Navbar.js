import React from "react";
import "./Navbar.css"
import style from '../assets/css/Nav.module.css'

import logo from "../assets/img/nav/logo.png";
const Navbar=()=>{
    return(
        <div>

    <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
       
        <img className={`${style.logo}`} src={logo} alt="logo"></img>
   
        {/* <label class="logo">Connect</label> */}
        <ul>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            
            <li><a href="/interview">Interview Experience</a></li>
            <li><a href="/halloffame">Hall Of Fame</a></li>
            <li><a href="/feedback">Feedback</a></li>
            <li><a href="/login">SignIn</a></li>
        </ul>
    </nav>
    
    </div>
    )
}

export default Navbar;