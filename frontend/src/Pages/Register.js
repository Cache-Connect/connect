import React, { useState } from "react"
import style from '../assets/css/Register.module.css';
import axios from "axios"
import { useHistory } from "react-router-dom"
import Navbar from "../components/Navbar";

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:5000/register", user)
                .then(res => {
                    alert(res.data.message)
                    history.push("/login")
                })
        } else {
            alert("invlid input")
        }

    }

    return (
        <div>
            <Navbar />
            <div className={style.register}>
                {console.log("User", user)}
                <h1 style={{fontWeight:"600"}}>Register</h1><hr/>
                <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
                <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
                <div className={style.button} onClick={register} >Register</div>
                <div>or</div>
                <div className={style.button} onClick={() => history.push("/login")}>Login</div>
            </div>
        </div>
    )
}

export default Register