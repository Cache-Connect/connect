import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router';
import '../assets/css/interviewExperience.css'

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
            else {

            }
        }
        else {
            history.replace("/login")
        }
    }, [])

    return (
        <>
            <Navbar />
            <div className="out">
            <div className="site-wrapper">
                <div className="article">
                    <header>
                        <h1>Interview Experiences</h1>
                    </header>
                    <main>
                        <h2 style={{ color: 'blue' }}>Tanishq Maheshwari (BE 2022)</h2>
                        <h3>Company- TCS Digital</h3>
                        <h3>Placement Type- Full time</h3>
                        <h3>Package- 7 lpa</h3>
                        <h4 style={{ display: 'inline' }}>Round 1:</h4><p style={{ display: 'inline' }}>It was a virtual assessment consisting of verbal, and aptitude MCQs followed by 2 coding questions (TCS Ninja test).</p>
                        <br />
                        <h4 style={{ display: 'inline' }}>Round 2:</h4><p style={{ display: 'inline' }}>It was a virtual test consisting of only 2 coding questions (TCS Ninja Toppers Test).</p>
                        <br />
                        <h4 style={{ display: 'inline' }}>Round 3:</h4><p style={{ display: 'inline' }}>(Technical and HR Interview) duration was 20-25 minutes.
                            The interviewer first asked me to introduce myself and asked me about the projects I have created.</p>
                        <h4>Questions on OOPS</h4>
                        <p>1. oops concepts</p>
                        <p>2. Inheritance and its types</p>
                        <h4>Questions on ReactJS:</h4>
                        <p>Difference between ReactJS and React Native</p>
                        <p>Difference between ReactJS and virtual DOM</p>
                        <p>What is virtual DOM?</p>
                        <p>Why do we create a component in ReactJS?</p>
                        <h4>Questions on DBMS:</h4>
                        <p>Why do we need RDBMS?</p>
                        <p>Difference between SQL and MySQL</p>
                        <p>Types of DBMS.</p>
                    </main>
                    <hr/>
                    <main>
                        <h2 style={{ color: 'blue' }}>Kartikey Bhawsar (BE 2022)</h2>
                        <h3>Walkover</h3>
                        <h3>Placement Type- Full time</h3>
                        <h3>Package- 7.5 lpa</h3>
                        <h4 style={{ display: 'inline' }}>Round 1:</h4><p style={{ display: 'inline' }}>It was a virtual assessment consisting of verbal, and aptitude MCQs followed by 2 coding questions (TCS Ninja test).</p>
                        <br />
                        <h4 style={{ display: 'inline' }}>Round 2:</h4><p style={{ display: 'inline' }}>It was a virtual test consisting of only 2 coding questions (TCS Ninja Toppers Test).</p>
                        <br />
                        <h4 style={{ display: 'inline' }}>Round 3:</h4><p style={{ display: 'inline' }}>(Technical and HR Interview) duration was 20-25 minutes.
                            The interviewer first asked me to introduce myself and asked me about the projects I have created.</p>
                        <h4>Questions on OOPS</h4>
                        <p>1. oops concepts</p>
                        <p>2. Inheritance and its types</p>
                        <h4>Questions on ReactJS:</h4>
                        <p>Difference between ReactJS and React Native</p>
                        <p>Difference between ReactJS and virtual DOM</p>
                        <p>What is virtual DOM?</p>
                        <p>Why do we create a component in ReactJS?</p>
                        <h4>Questions on DBMS:</h4>
                        <p>Why do we need RDBMS?</p>
                        <p>Difference between SQL and MySQL</p>
                        <p>Types of DBMS.</p>
                    </main>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default InterviewExperience;
