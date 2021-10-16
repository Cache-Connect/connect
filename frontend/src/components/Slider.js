import React from 'react';
import accenture from "../assets/img/slider/accenture.jpg";
import deloitte from "../assets/img/slider/deloitte.jpg";
import cognizant from "../assets/img/slider/cognizant.jpg";
import capegemini from "../assets/img/slider/capegemini.jpg";
import styles from '../assets/css/slider.module.css';

function Slider() {
    return (
        <div>
            <div className={`${styles.sliderEven} my-4`}>
                <img className="col-3" src={accenture} alt="Accenture"></img>
                <img className="col-3" src={deloitte} alt="Deloitte"></img>
                <img className="col-3" src={cognizant} alt="Cognizant"></img>
                <img className="col-3" src={capegemini} alt="Capegemini"></img>
            </div>
            <div className={`${styles.sliderOdd}`}>
                <img className="col-4" src={accenture} alt="Accenture"></img>
                <img className="col-4" src={deloitte} alt="Deloitte"></img>
                <img className="col-4" src={cognizant} alt="Cognizant"></img>
            </div>
            <div className={`${styles.sliderEven} my-4`}>
                <img className="col-3" src={accenture} alt="Accenture"></img>
                <img className="col-3" src={deloitte} alt="Deloitte"></img>
                <img className="col-3" src={cognizant} alt="Cognizant"></img>
                <img className="col-3" src={capegemini} alt="Capegemini"></img>
            </div>
            <div className={`${styles.sliderOdd}`}>
                <img className="col-4" src={accenture} alt="Accenture"></img>
                <img className="col-4" src={deloitte} alt="Deloitte"></img>
                <img className="col-4" src={cognizant} alt="Cognizant"></img>
            </div>
        </div>
    )
}

export default Slider
