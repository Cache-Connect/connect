import React, { useEffect, useState } from "react";
import "./Navbar.css"
import style from '../assets/css/Nav.module.css'
import { NavLink } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { useHistory } from "react-router-dom";


import logo from "../assets/img/nav/logo.png";

const Navbar = () => {
    const history=useHistory();
    const [showLogout,setShowLogout]=useState(false);
    useEffect(() => {

        const token = localStorage.getItem('token');
        if (token) {
            const user = jwt.decode(token);
            // console.log(user);
            if (!user) {
                localStorage.removeItem('token');
                setShowLogout(false);
            }
            else {
                setShowLogout(true);
            }
        }
    },[])

    const handleLogout=()=>{
        // const token=localStorage.getItem('token');
        localStorage.removeItem('token');
        setShowLogout(false);
        alert("You have been Logged out successfully")
        history.push("/")
    }

    return (
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
                    <li><NavLink activeClassName="active" to="/">Home</NavLink></li>

                    <li><NavLink activeClassName="active" to="/interview-experience">Interview Experience</NavLink></li>
                    <li><NavLink activeClassName="active" to="/halloffame">Hall Of Fame</NavLink></li>
                    <li><NavLink activeClassName="active" to="/feedback">Feedback</NavLink></li>
                    {!showLogout
                    ? 
                    <li><NavLink activeClassName="active" to="/login">LogIn</NavLink></li> 
                    : 
                    <li><NavLink activeclassName="active" to="" onClick={handleLogout}>LogOut</NavLink></li>}
                </ul>
            </nav>

        </div>
    )
}

export default Navbar;