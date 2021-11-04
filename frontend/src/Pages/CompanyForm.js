import React, { useState } from 'react';
import style from '../assets/css/Home.module.css';
import Navbar from '../components/Navbar';
import axios from 'axios';

function CompanyForm() {

    const [companyId,setCompanyId]=useState(0);
    const [idError,setIdError]=useState(false);

    const [companyName, setCompanyName] = useState("");
    const [nameError,setNameError]=useState(false);

    const [linkToApply, setLinkToApply] = useState("");

    const [logoLink, setLogoLink] = useState("");
    const [logoError,setLogoError]=useState(false);

    const [arrivalDate, setDateOfArrival] = useState("");
    const [dateError,setDateError]=useState(false);
    
    const [ctcOffered, setCtcOffered] = useState("");
    const [ctcError,setCtcError]=useState(false);

    const [recruitmentType,setRecruitmentType]=useState("on");
    
    const [bond,setBond]=useState(0);

    const [showUpdate,setShowUpdate]=useState(false);

    const [hasError,setHasError]=useState("");
    const BASE_URL="http://localhost:5000"

    const handleSubmit=async ()=>{
        setIdError(false);
        setNameError(false);
        setDateError(false);
        setLogoError(false);
        setCtcError(false);
        setHasError("");
        setShowUpdate(false);
        if(companyId===0 || companyName==="" || arrivalDate==="" || logoLink==="" || ctcOffered==="")
        {
            if(companyId===0)
            {
                setIdError(true);
            }
            if(companyName==="")
            {
                setNameError(true);
            }
            if(arrivalDate==="")
            {
                setDateError(true);
            }
            if(logoLink==="")
            {
                setLogoError(true);
            }
            if(ctcOffered==="")
            {
                setCtcError(true);
            }
            setHasError("Fields that are marked with * are mandatory");
            return;
        }
        // alert(companyId+" "+companyName+" "+linkToApply+" "+arrivalDate+" "+ctcOffered+" "+recruitmentType+" "+bond);
        await axios.get(BASE_URL+"/getAllCompanies").then((res)=>{
            console.log(res.data);
            const cId=parseInt(companyId);
            if(res.data.some(company=>company.companyId===cId))
            {
                setIdError(true);
                setShowUpdate(true);
                setHasError("Company with this Id already exists. Do you want to update?")
                return;
            }
            return;
        })

        if(hasError!=="") return;

        await axios.post(BASE_URL+"/companyform",{
            companyId,
            companyName,
            linkToApply,
            logoLink,
            arrivalDate,
            ctcOffered,
            recruitmentType,
            bond,
        }).then((response)=>{
            console.log(response.data);
        })
        setCompanyId(0);
        setCompanyName("");
        setLinkToApply("");
        setLogoLink("");
        setDateOfArrival("")
        setCtcOffered("")
        setRecruitmentType("on")
        setBond(0);
        alert(`Company with Id ${companyId} successfully added`);
    }

    const handleUpdate = async()=>{

        setIdError(false);
        setNameError(false);
        setDateError(false);
        setLogoError(false);
        setCtcError(false);
        setHasError("");
        if(companyId===0 || companyName==="" || arrivalDate==="" || logoLink==="" || ctcOffered==="")
        {
            if(companyId===0)
            {
                setIdError(true);
            }
            if(companyName==="")
            {
                setNameError(true);
            }
            if(arrivalDate==="")
            {
                setDateError(true);
            }
            if(logoLink==="")
            {
                setLogoError(true);
            }
            if(ctcOffered==="")
            {
                setCtcError(true);
            }
            setHasError("Fields that are marked with * are mandatory");
            return;
        }

        await axios.put(BASE_URL+"/updateCompany",{
            companyId,
            companyName,
            linkToApply,
            logoLink,
            arrivalDate,
            ctcOffered,
            recruitmentType,
            bond,
        }).then((response)=>{
            console.log(response.data);
            alert(response.data.message)
        }).catch((err)=>{
            console.log(err.message);
        })
    }

    return (
        <div>
            <Navbar />
            <h2 className={`${style.mainHeading} text-center py-5`}>Company Form that are coming for recruitment in IET DAVV
            </h2>
            <div className={`${style.form} ` }  onSubmit={handleSubmit}>
              <div className={`${style.label}`}> <label  htmlFor="companyId">Company Id:</label>&nbsp;&nbsp;
                <input className={`${style.input}`} value={companyId} type="number" id="companyId" name="companyId" onChange={(e) => setCompanyId(e.target.value)} />&nbsp;
                {idError && <b style={{color:'red'}}>*</b>}
                <br />
              </div>

              <div  className={`${style.label}`} >
                <label  htmlFor="companyName">Company Name:</label>&nbsp;&nbsp;
                <input  className={`${style.input}`} value={companyName} type="text" id="companyName" name="companyName" onChange={(e) => setCompanyName(e.target.value)} />&nbsp;
                {nameError && <b style={{color:'red'}}>*</b>}
                <br />
                </div>

              <div className={`${style.label}`}>
                <label   htmlFor="linkToApply">Form Link:</label>&nbsp;&nbsp;
                <input   className={`${style.input}`} value={linkToApply} type="text" id="linkToApply" name="linkToApply" onChange={(e) => setLinkToApply(e.target.value)} /><br />
</div>
<div className={`${style.label} margin-top py-3`}>
                <label   htmlFor="logoLink">Company Logo Link: </label>&nbsp;&nbsp;
                <input  className={`${style.input}`} value={logoLink} type="url" id="logoLink" name="logoLink" onChange={(e) => setLogoLink(e.target.value)} />&nbsp;
                {logoError && <b style={{color:'red'}}>*</b>}
                <br />
            </div>
            <div className={`${style.label}`}>
                <label    htmlFor="date">Date when company is arriving to campus: </label>&nbsp;&nbsp;
                <input  className={`${style.input}`} value={arrivalDate} type="date" id="date" name="date" onChange={(e) => setDateOfArrival(e.target.value)} />&nbsp;
                {dateError && <b style={{color:'red'}}>*</b>}
                <br />
</div>
<div className={`${style.label}`}>
                <label htmlFor="ctc">CTC Offered (per annum):</label>&nbsp;&nbsp;
                <input  className={`${style.input}`} value={ctcOffered} type="text" id="ctc" name="ctc" onChange={(e) => setCtcOffered(e.target.value)} />&nbsp;
                {ctcError && <b style={{color:'red'}}>*</b>}
                <br />
</div>
<div className={`${style.label}`}>
                <label  > Recruitment Type: </label>&nbsp;&nbsp;
                <input type="radio" id="on" value="on" name="ctc" checked onChange={(e) => setRecruitmentType(e.target.value)} />&nbsp;On Campus&nbsp;&nbsp;
                <input type="radio" id="off" value="off" name="ctc" onChange={(e) => setRecruitmentType(e.target.value)} />&nbsp;Off Campus<br />
</div>
<div className={`${style.label} margin-top py-3`}>             
                <label     htmlFor="bond">Bond (in years): </label>&nbsp;&nbsp;
                <input  className={`${style.input}`} type="number" id="bond" value={bond} onChange={(e) => setBond(e.target.value)}/><br />
                {/* <select value={recruitmentType} onChange={(e)=>setRecruitmentType(e.target.value)}>
                    <option value="off">Off Campus</option>
                    <option value="on">On Campus</option>
                </select> */}
</div>  
                {hasError!=="" && <p style={{color:'red'}}>{hasError}</p>}
                {showUpdate && <button  className={`${style.submitButton}`} type="button" onClick={handleUpdate}>Update</button>}
                <button  className={`${style.submitButton}`} type="button" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default CompanyForm;
