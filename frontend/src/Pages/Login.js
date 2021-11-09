import React, { useState } from "react"
import style from '../assets/css/Login.module.css'
import axios from "axios"
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";

// const Login = ({ setLoginUser }) => {
const Login = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [err,setErr]=useState("");
    // const [showLogout,setShowLogout]=useState(false);

    const handleChange = e => {
        setErr("");
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:5000/login", user)
            .then(res => {
                let msg=res.data.message;
                if(!res.data.user) setErr(msg);
                else{
                    setErr("");
                    console.log(res.data.user.token);
                    localStorage.setItem('token',res.data.user.token)
                    console.log(res.data.token);
                    // setShowLogout(true);

                    alert("Login Successful")

                    history.push("/");
                }
                    // setLoginUser(res.data.user)
            })
    }

    return (
        <div className>
            <Navbar/>
            <div className={`${style.login}`}>
                <h1 style={{fontWeight:"600"}}>Login</h1> <hr/>
                <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
                {err!=="" && <p style={{color:"red"}}>{err}</p>}
                <div className={style.button} onClick={login}>Login</div>
                <div>or</div>
                <div className={style.button} onClick={() => history.push("/register")}>Register</div>
            </div>
        </div>
    )
}

export default Login