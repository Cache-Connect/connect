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
        <label class="logo">Logo</label>
        <ul>
            <li><a className="active" href="#">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Feedback</a></li>
        </ul>
    </nav>
    
    </div>
    )
}

export default Navbar;