import React from 'react';


import vm from "../assets/img/slider/vm.jpg";
import  groww from "../assets/img/slider/groww.png";
import  factset from "../assets/img/slider/factset.png";
import  avalara from "../assets/img/slider/avalara.png";

import  nuclei from "../assets/img/slider/nuclei.png";
import  zs from "../assets/img/slider/zs.jpeg";
import  quantiphi from "../assets/img/slider/quantiphi.png";

import  info from "../assets/img/slider/info.jpg";
import  pgs from "../assets/img/slider/pgs.png";
import  walkover from "../assets/img/slider/walkover.png";
import  persistent from "../assets/img/slider/persi.png";

import capillary from "../assets/img/slider/capillary.png";
import deloitte from "../assets/img/slider/deloitte.jpg";
import pwc from "../assets/img/slider/pwc.png";

import cognizant from "../assets/img/slider/cognizant.jpg";
import impetus from "../assets/img/slider/impetus.jpg";
import deqode from "../assets/img/slider/deqode.jpg";
import josh from "../assets/img/slider/josh.png";


import lti from "../assets/img/slider/lti.jpg";
import gamma from "../assets/img/slider/gamma.jpg";
import hexaview from "../assets/img/slider/hexaview.png";

import capegemini from "../assets/img/slider/capegemini.jpg";
import accenture from "../assets/img/slider/accenture.jpg";
import tcs from "../assets/img/slider/tcs.png";
import wipro from "../assets/img/slider/wipro.png";


import styles from '../assets/css/slider.module.css';

function Slider() {
    return (
            <div className="container-fluid"> 
            <div className={`${styles.sliderEven} row`}>
                <img className="col-sm-3 col-md-3" src={vm} alt="VmWare"></img>
                <img className="col-sm-3 col-md-3" src={groww} alt="Groww"></img>
                <img className="col-sm-3 col-md-3" src={factset} alt="factset"></img>
                <img className="col-sm-3 col-md-3" src={avalara} alt="Avalara"></img>
            </div>
            <div className={`${styles.sliderOdd} row`}>
                <img className="col-sm-4 col-md-4" style={{left:"8.5%"}} src={nuclei} alt="Nuclei"></img>
                <img className="col-sm-4 col-md-4" src={zs} alt="ZS-associate"></img>
                <img className="col-sm-4 col-md-4" style={{right:"8%"}} src={quantiphi} alt="Quantiphi"></img>
            </div>
            <div className={`${styles.sliderEven} row`}>
                <img className="col-sm-3 col-md-3" src={info} alt="Infosys"></img>
                <img className="col-sm-3 col-md-3" src={pgs} alt="Principal Global Service"></img>
                <img className="col-sm-3 col-md-3" src={walkover} alt="Walkover"></img>
                <img className="col-sm-3 col-md-3" src={persistent} alt="Persistent"></img>
            </div>
            <div className={`${styles.sliderOdd} row`}>
                <img className="col-sm-4 col-md-4" style={{left:"8.5%"}} src={capillary} alt="Capillary"></img>
                <img className="col-sm-4 col-md-4" src={deloitte} alt="Deloitte"></img>
                <img className="col-sm-4 col-md-4" style={{right:"8%"}} src={pwc} alt="PWC"></img>
            </div>

            <div className={`${styles.sliderEven} row`}>
                <img className="col-sm-3 col-md-3" src={cognizant} alt="Cognizant"></img>
                <img className="col-sm-3 col-md-3" src={impetus} alt="Impetus"></img>
                <img className="col-sm-3 col-md-3" src={deqode} alt="Deqode"></img>
                <img className="col-sm-3 col-md-3" src={josh} alt="Josh Technologies"></img>
            </div>

            <div className={`${styles.sliderOdd} row`}>
                <img className="col-sm-4 col-md-4" style={{left:"8.5%"}} src={lti} alt="LTI"></img>
                <img className="col-sm-4 col-md-4" src={hexaview} alt="Hexaview"></img>
                <img className="col-sm-4 col-md-4" style={{right:"8%"}} src={gamma} alt="Gamma Stack"></img>
            </div>

            <div className={`${styles.sliderEven} row`}>
                <img className="col-sm-3 col-md-3" src={capegemini} alt="Capegimini"></img>
                <img className="col-sm-3 col-md-3" src={accenture} alt="Accenture"></img>
                <img className="col-sm-3 col-md-3" src={tcs} alt="Tcs"></img>
                <img className="col-sm-3 col-md-3" src={wipro} alt="Wipro"></img>
            </div>
            </div>
    )
}

export default Slider
