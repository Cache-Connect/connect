import React, { useState } from 'react';
import style from '../assets/css/Form.module.css';
import Navbar from '../components/Navbar';
import axios from 'axios';

function HallOfFameForm() {

    const [studentId, setStudentId] = useState("");
    const [idError, setIdError] = useState(false);

    const [companyName, setCompanyName] = useState("");
    const [nameError, setNameError] = useState(false);

    const [student_name, setstudent_name] = useState("");
    const [studentNameError, setStudentNameError] = useState(false);

    const [branch, setBranch] = useState("");
    const [branchError, setBranchError] = useState(false);

    const [batch, setBatch] = useState("");
    const [batchError, setBatchError] = useState(false);

    const [ctcOffered, setCtcOffered] = useState("");
    const [ctcError, setCtcError] = useState(false);

    const [recruitmentType, setRecruitmentType] = useState("on");

    const [contact_info, setContactInfo] = useState("");
    const [contactError, setContactError] = useState(false);


    const [hasError, setHasError] = useState("");
    const BASE_URL = "http://localhost:5000"

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIdError(false);
        setNameError(false);
        setStudentNameError(false);
        setBatchError(false);
        setBranchError(false);
        setCtcError(false);
        setContactError(false);
        setHasError("");

        if (studentId === "" || student_name === "" || companyName === "" || batch === "" || branch === "" || ctcOffered === "" || contact_info === "") {
            if (studentId === "") {
                setIdError(true);
            }
            if (student_name === "") {
                setStudentNameError(true);
            }
            if (companyName === "") {
                setNameError(true);
            }
            if (batch === "") {
                setBatchError(true);
            }
            if (branch === "") {
                setBranchError(true);
            }
            if (ctcOffered === "") {
                setCtcError(true);
            }
            if (contact_info === "") {
                setContactError(true);
            }
            setHasError("Fields that are marked with * are mandatory");
            return;
        }

        //     await axios.get(BASE_URL+"/getAllCompanies").then((res)=>{
        //         console.log(res.data);
        //         const cId=parseInt(studentId);
        //         if(res.data.some(company=>company.companyId===cId))
        //         {
        //             setIdError(true);

        //             setHasError("Company with this Id already exists. Do you want to update?")
        //             return;
        //         }
        //         return;
        //     })

        //     if(hasError!=="") return;

        await axios.post(BASE_URL + "/placedStudentForm", {
            enrollmentNo: studentId,
            companyName,
            fullName: student_name,
            branch,
            batch,
            linkedIn:contact_info,
            ctc: ctcOffered,
            recruitmentType,
        }).then((response) => {
            console.log(response.data);
        })
        setStudentId(0);
        setCompanyName("");
        setstudent_name("");
        setBranch("");
        setBatch("");
        setCtcOffered("");
        setRecruitmentType("on");
        alert(`Student with enrollment No. ${studentId} successfully added`);
    }

    return (
        <div>
            <Navbar />
            <h2 className={`${style.mainHeading} text-center py-5`}>Student Placed in IET DAVV
            </h2>
            <div className={`${style.form} `} onSubmit={handleSubmit}>
                <div className={`${style.label}`}> <label htmlFor="studentId">Enrollment No. of Student:</label>&nbsp;&nbsp;
                    <input className={`${style.input}`} value={studentId} type="text" id="studentId" name="studentId" onChange={(e) => setStudentId(e.target.value)} />&nbsp;
                    {idError && <b style={{ color: 'red' }}>*</b>}
                    <br />
                </div>

                <div className={`${style.label}`}>
                    <label htmlFor="student_name">Name of Student :</label>&nbsp;&nbsp;
                    <input className={`${style.input}`} value={student_name} type="text" id="student_name" name="student_name" onChange={(e) => setstudent_name(e.target.value)} />&nbsp;
                    {studentNameError && <b style={{ color: 'red' }}>*</b>}
                    <br />
                </div>

                <div className={`${style.label}`} >
                    <label htmlFor="companyName">Company Name:</label>&nbsp;&nbsp;
                    <input className={`${style.input}`} value={companyName} type="text" id="companyName" name="companyName" onChange={(e) => setCompanyName(e.target.value)} />&nbsp;
                    {nameError && <b style={{ color: 'red' }}>*</b>}
                    <br />
                </div>

                <div className={`${style.label} margin-top py-3`}>
                    <label htmlFor="branch">Branch of Student: </label>&nbsp;&nbsp;
                    <input className={`${style.input}`} value={branch} type="text" id="branch" name="branch" onChange={(e) => setBranch(e.target.value)} />&nbsp;
                    {branchError && <b style={{ color: 'red' }}>*</b>}
                    <br />
                </div>
                <div className={`${style.label}`}>
                    <label htmlFor="batch">Batch of Student: </label>&nbsp;&nbsp;
                    <input className={`${style.input}`} value={batch} type="text" id="batch" name="batch" onChange={(e) => setBatch(e.target.value)} />&nbsp;
                    {batchError && <b style={{ color: 'red' }}>*</b>}
                    <br />
                </div>

                <div className={`${style.label}`}>
                    <label htmlFor="contact_info">LinkedIn profile of Student: </label>&nbsp;&nbsp;
                    <input className={`${style.input}`} value={contact_info} type="text" id="contact_info" name="contact_info" onChange={(e) => setContactInfo(e.target.value)} />&nbsp;
                    {contactError && <b style={{ color: 'red' }}>*</b>}
                    <br />
                </div>

                <div className={`${style.label}`}>
                    <label htmlFor="ctc">CTC Offered (per annum):</label>&nbsp;&nbsp;
                    <input className={`${style.input}`} value={ctcOffered} type="text" id="ctc" name="ctc" onChange={(e) => setCtcOffered(e.target.value)} />&nbsp;
                    {ctcError && <b style={{ color: 'red' }}>*</b>}
                    <br />
                </div>
                <div className={`${style.label}`}>
                    <label  > Type of Recruitment: </label>&nbsp;&nbsp;
                    <input type="radio" id="on" value="on" name="ctc" checked onChange={(e) => setRecruitmentType(e.target.value)} />&nbsp;On Campus&nbsp;&nbsp;
                    <input type="radio" id="off" value="off" name="ctc" onChange={(e) => setRecruitmentType(e.target.value)} />&nbsp;Off Campus<br />
                </div>

                {hasError !== "" && <p style={{ color: 'red' }}>{hasError}</p>}
                {/* {showUpdate && <button  className={`${style.submitButton}`} type="button" onClick={handleUpdate}>Update</button>} */}
                <button className={`${style.submitButton}`} type="button" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default HallOfFameForm;
