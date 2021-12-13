import React, { useState }  from 'react'
import style from '../assets/css/Form.module.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
// import style from '../assets/css/Form.module.css';
const Feedback = () => {

    const [namee, setname] = useState("");
    const [NameError, setNameError] = useState(false);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);


    const [subject, setSubject] = useState("");
   
    const [msg, setMsg] = useState("");
  


    const [hasError, setHasError] = useState("");
   

    const handleSubmit = async (e) => {
        e.preventDefault();

        setNameError(false);
        setEmailError(false);
       
        setHasError("");

        if (namee === "" || email=== "" ) {
            if (namee === "") {
                setNameError(true);
            }
            if (email === "") {
                setEmailError(true);
            }
        
            setHasError("Fields that are marked with * are mandatory");
            return;
        }

        alert(`Successfully Submitted`);
    }


    return (
        <>
        <Navbar />
        <h2 className={`${style.mainHeading} text-center py-5`}> Feedback Form
            </h2>
            <div className={`${style.form} `} onSubmit={handleSubmit}>
             

                <div className={`${style.label}`}>
                    <label htmlFor="namee">Name :</label>&nbsp;&nbsp;
                    <input className={`${style.input}`} value={namee} type="text" id="namee" name="namee" onChange={(e) => setname(e.target.value)} />&nbsp;
                    {NameError && <b style={{ color: 'red' }}>*</b>}
                    <br />
                </div>

                <div className={`${style.label}`} >
                    <label htmlFor="email">Email id:</label>&nbsp;&nbsp;
                    <input className={`${style.input}`} value={email} type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />&nbsp;
                    {emailError && <b style={{ color: 'red' }}>*</b>}
                    <br />
                </div>

                <div className={`${style.label} margin-top py-3`}>
                    <label htmlFor="subject">Subject: </label>&nbsp;&nbsp;
                    <input className={`${style.input}`} value={subject} type="text" id="subject" name="subject" onChange={(e) => setSubject(e.target.value)} />&nbsp;
                  
                    <br />
                </div>
                <div className={`${style.label} `}>
                    <label htmlFor="msg">Message: </label>&nbsp;&nbsp;
                    <textarea rows="4" cols="50" className={`${style.input}`} value={msg} type="text-area" id="msg" name="msg" onChange={(e) => setMsg(e.target.value)} />&nbsp;
                   
                    <br />
                </div>

            
                {hasError !== "" && <p style={{ color: 'red', padding:'4%' }}>{hasError}</p>}
                {/* {showUpdate && <button  className={`${style.submitButton}`} type="button" onClick={handleUpdate}>Update</button>} */}
                <button className={`${style.submitButton}`} type="button" onClick={handleSubmit}>Submit</button>
            </div>
            <Footer />
       </>
    )
}

export default Feedback;