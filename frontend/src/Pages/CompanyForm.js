import React, { useState } from 'react';
import style from '../assets/css/Home.module.css';
import Navbar from '../components/Navbar';

function CompanyForm() {

    const [companyName, setCompanyName] = useState("");
    const [linkToApply, setLinkToApply] = useState("");
    const [arrivalDate, setDateOfArrival] = useState("");
    const [ctcOffered, setCtcOffered] = useState("");
    const [recruitmentType,setRecruitmentType]=useState("on");
    const [bond,setBond]=useState(0);

    const handleSubmit=()=>{
        alert(companyName+" "+linkToApply+" "+arrivalDate+" "+ctcOffered+" "+recruitmentType+" "+bond);
    }

    return (
        <div>
            <Navbar />
            <h1 className={`${style.mainHeading} text-center py-5`}>Company Form that are coming for recruitment in IET DAVV</h1><hr />
            <form onSubmit={handleSubmit}>
                <label htmlFor="companyName">Company Name:</label>&nbsp;&nbsp;
                <input type="text" id="companyName" name="companyName" onChange={(e) => setCompanyName(e.target.value)} /><br />
                <label htmlFor="linkToApply">Form Link:</label>&nbsp;&nbsp;
                <input type="text" id="linkToApply" name="linkToApply" onChange={(e) => setLinkToApply(e.target.value)} /><br />
                <label htmlFor="date">Date when company is arriving to campus: </label>&nbsp;&nbsp;
                <input type="date" id="date" name="date" onChange={(e) => setDateOfArrival(e.target.value)} /><br />
                <label htmlFor="ctc">CTC Offered (per annum):</label>&nbsp;&nbsp;
                <input type="text" id="ctc" name="ctc" onChange={(e) => setCtcOffered(e.target.value)} /><br />
                <label htmlFor="ctc"> Recruitment Type: </label>&nbsp;&nbsp;
                <input type="radio" id="on" value="on" name="ctc" checked onChange={(e) => setRecruitmentType(e.target.value)} />&nbsp;On Campus&nbsp;&nbsp;
                <input type="radio" id="off" value="off" name="ctc" onChange={(e) => setRecruitmentType(e.target.value)} />&nbsp;Off Campus<br />
                <label htmlFor="bond">Bond (in years): </label>&nbsp;&nbsp;
                <input type="number" id="bond" onChange={(e) => setBond(e.target.value)}/><br />
                {/* <select value={recruitmentType} onChange={(e)=>setRecruitmentType(e.target.value)}>
                    <option value="off">Off Campus</option>
                    <option value="on">On Campus</option>
                </select> */}
                <input type="submit" />
            </form>
        </div>
    )
}

export default CompanyForm;
