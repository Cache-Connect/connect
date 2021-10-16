import React from "react";
import "./Navbar.css"

const Navbar=()=>{
    return(
        <div>

    <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <label class="logo">Connect</label>
        <ul>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/interview">Interview Experience</a></li>
            <li><a href="/halloffame">Hall Of Fame</a></li>
            <li><a href="/feedback">Feedback</a></li>
        </ul>
    </nav>
    
    </div>
    )
}

export default Navbar;