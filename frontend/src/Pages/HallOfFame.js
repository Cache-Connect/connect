/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import styles from "../assets/css/HallOfFame.module.css";
import Navbar from '../components/Navbar';
import ln from "../assets/img/slider/ln.png";
import axios from 'axios';

function HallOfFame() {
    const BASE_URL = "http://localhost:5000";
    const [placedStudents, setPlacedStudents] = useState([]);
    
    useEffect(() => {
        axios.get(BASE_URL + "/getAllPlacedStudents").then((res) => {
            console.log(res.data);
            setPlacedStudents(res.data);
        })
    }, [])

    return (
        <>
        <Navbar />
        <div className={styles.reach}> <a href='/halloffame-form'> Reach out to us if you have secured any off/on-campus offer and your name is not updated here yet!  </a> </div>
        <div className={styles.outer}>
            <div className={styles.row}>
                {
                    placedStudents.map((student) => {
                        return (
                            <div className={styles.card}>
                                <div className={styles.sname}>{student.fullName}</div>
                                <div className={styles.profile}>{student.companyName}</div>
                                <div className={styles.branch}> {student.branch} </div>
                                <div className={styles.type}> {student.recruitmentType}-Campus : Placement</div>
                                <div className={styles.pack}>({student.ctc})</div>
                                <div className={styles.batch}>Batch of {student.batch}</div>
                                <div className="mt-auto"><a href={student.linkedIn}><img className={styles.img} alt='' src={ln}></img></a></div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </>
    )
}

export default HallOfFame;
