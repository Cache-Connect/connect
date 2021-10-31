import React from 'react'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import style from '../assets/css/Home.module.css'

function Home() {
    return (
        <div>
            <Navbar />
                <h1 className={`${style.mainHeading} text-center py-5`}>Our Alumni Placed At Leading Companies</h1>
            <Slider />
        </div>
    )
}

export default Home;
