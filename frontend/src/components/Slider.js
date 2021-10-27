import React from 'react';
import accenture from "../assets/img/slider/accenture.jpg";
import deloitte from "../assets/img/slider/deloitte.jpg";
import cognizant from "../assets/img/slider/cognizant.jpg";
import capegemini from "../assets/img/slider/capegemini.jpg";
import styles from '../assets/css/slider.module.css';

function Slider() {
    return (
            <div className="container-fluid"> 
            <div className={`${styles.sliderEven} row`}>
                <img className="col-sm-3 col-md-3" src={accenture} alt="Accenture"></img>
                <img className="col-sm-3 col-md-3" src={deloitte} alt="Deloitte"></img>
                <img className="col-sm-3 col-md-3" src={cognizant} alt="Cognizant"></img>
                <img className="col-sm-3 col-md-3" src={capegemini} alt="Capegemini"></img>
            </div>
            <div className={`${styles.sliderOdd} row`}>
                <img className="col-sm-4 col-md-4" style={{left:"8.5%"}} src={accenture} alt="Accenture"></img>
                <img className="col-sm-4 col-md-4" src={deloitte} alt="Deloitte"></img>
                <img className="col-sm-4 col-md-4" style={{right:"8%"}} src={cognizant} alt="Cognizant"></img>
            </div>
            <div className={`${styles.sliderEven} row`}>
                <img className="col-sm-3 col-md-3" src={accenture} alt="Accenture"></img>
                <img className="col-sm-3 col-md-3" src={deloitte} alt="Deloitte"></img>
                <img className="col-sm-3 col-md-3" src={cognizant} alt="Cognizant"></img>
                <img className="col-sm-3 col-md-3" src={capegemini} alt="Capegemini"></img>
            </div>
            <div className={`${styles.sliderOdd} row`}>
                <img className="col-sm-4 col-md-4" style={{left:"8.5%"}} src={accenture} alt="Accenture"></img>
                <img className="col-sm-4 col-md-4" src={deloitte} alt="Deloitte"></img>
                <img className="col-sm-4 col-md-4" style={{right:"8%"}} src={cognizant} alt="Cognizant"></img>
            </div>
            </div>
    )
}

export default Slider
