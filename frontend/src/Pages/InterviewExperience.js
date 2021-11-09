import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router';

function InterviewExperience() {
    const history = useHistory();

    useEffect(() => {


        const token = localStorage.getItem('token');
        if (token) {
            const user = jwt.decode(token);
            if (!user) {
                localStorage.removeItem('token');
                history.replace('/login');
            }
            else{

            }
        }
        else {
            history.replace("/login")
        }
    }, [])

    return (
        <div>
            <Navbar />
        </div>
    )
}

export default InterviewExperience;
