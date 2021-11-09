import React, { useState, useEffect } from 'react';
import { Card,Button } from 'react-bootstrap';
import style from '../assets/css/Upcoming.module.css';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router';


function UpcomingCompanies() {

    const BASE_URL = "http://localhost:5000";
    const history=useHistory();

    const [upcomingCompanies, setUpcomingCompanies] = useState([]);

    useEffect(() => {
        axios.get(BASE_URL + "/getAllCompanies")
            .then((res) => {
                console.log(res.data);
                let tempArr = [];
                res.data.forEach(element => {
                    // console.log(element.arrivalDate);
                    var q = new Date();
                    var m = q.getMonth();
                    var d = q.getDay();
                    var y = q.getFullYear();
                    var today = new Date(y, m, d);

                    // console.log((today.toISOString()))
                    if (element.arrivalDate >= today.toISOString()) {
                        tempArr.push(element);
                    }
                });
                setUpcomingCompanies(tempArr);
                console.log(upcomingCompanies)
            })
            .catch((err) => console.log(err))
    }, [])

    const handleApplyNow=(e)=>{
        console.log(e.target.link)
        const token = localStorage.getItem('token');
        if (token) {
            const user = jwt.decode(token);
            if (!user) {
                localStorage.removeItem('token');
                history.replace('/login');
            }
            else{
                history.push(e.target.link);
            }
        }
        else {
            history.replace("/login")
        }
    }

    return ( <div  className={`${style.outerbox}`}>
        <div className="container-fluid ">
            <div className={`row`}>
                {
                    upcomingCompanies.map((company) => {

                        return (
                            <div className={`${style.card} col-sm-3 col-md-4`}> 
                           <div className={`${style.card_head}`}>
                                <Card >
                                {/* borderStyle:"none" */}
                                <div className={`${style.img}`} >
                                    <Card.Img variant="top" src={company.logoLink} />
                                </div>
                                {/* <hr/> */}
                                <div className={`${style.text}`}>
                                <Card.Body className={`${style.body}` }>
                                    <Card.Title>{company.companyName}</Card.Title>
                                    <Card.Text>
                                <h5> {company.recruitmentType}-Campus</h5>
                                    </Card.Text>
                                    <Button variant="primary" >
                                    <div  className={`${style.buttonText}`} link={company.linkToApply} onClick={handleApplyNow} target="blank"> Apply Now</div>
                                    </Button>
                                </Card.Body>
                                </div>
                                </Card>
</div>
                            {/* <h1 className="col-sm-3 col-md-3">{company.companyName}</h1> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </div>
    )
}

export default UpcomingCompanies
