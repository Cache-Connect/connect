import React, { useState } from "react"
import style from '../assets/css/Register.module.css';
import axios from "axios"
import { useHistory } from "react-router-dom"
import Navbar from "../components/Navbar";

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const [passwordError, setPasswordError] = useState("");

    const handleChange = e => {
        const { name, value } = e.target

        if (name === 'password') {
            if (value.length < 5 && value.length > 0) {
                setPasswordError("Password must be 5 characters long");
            }
            else setPasswordError("");
        }
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleRegister = () => {
        const { fullName, email, password, reEnterPassword } = user
        if (user.password.length < 5) return;
        if (fullName && email && password) {
            if ((password !== reEnterPassword)) {
                setPasswordError("Password doesn't match");
                return;
            }
            else setPasswordError("");
            axios.post("http://localhost:5000/register", user)
                .then(res => {
                    if(!res.data.error) {
                        alert(res.data.message)
                        history.push("/login")
                    }
                    else setPasswordError(res.data.message)
                })
        } else {
            setPasswordError("All fields are mandatory")
        }

    }

    return (
        <div>
            <Navbar />
            <div className={style.register}>
                {/* {console.log("User", user)} */}
                <h1 style={{ fontWeight: "600" }}>Register</h1><hr />
                <input type="text" name="fullName" value={user.fullName} placeholder="Your Full Name" onChange={handleChange}></input>
                <input type="email" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
                {passwordError !== "" && <p style={{ color: "red" }}>{passwordError}</p>}
                <div className={style.button} onClick={handleRegister} >Register</div>
                <div>or</div>
                <div className={style.button} onClick={() => history.push("/login")}>Login</div>
            </div>
        </div>
    )
}

export default Register