import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import UpcomingCompanies from '../components/UpcomingCompanies';
import style from '../assets/css/Home.module.css'

function Home() {
    return (
        <div>
            <Navbar />
                <h1 className={`${style.mainHeading} text-center py-5`}>Our Alumni Placed At Leading Companies</h1>
            <Slider />
            <br/>
            
            
            <h1 className={`${style.mainHeading} text-center py-5`}>Upcoming Companies</h1>
            <UpcomingCompanies />
            <Footer />
        </div>
    )
}

export default Home;
