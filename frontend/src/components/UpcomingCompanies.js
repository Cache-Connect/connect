import React, { useState, useEffect } from 'react';
import { Card,Button } from 'react-bootstrap';
import style from '../assets/css/Upcoming.module.css';
import axios from 'axios';

function UpcomingCompanies() {

    const BASE_URL = "http://localhost:5000";

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

    return ( <div  className={`${style.outerbox}`}>
        <div className="container-fluid ">
            <div className={`row`}>
                {
                    upcomingCompanies.map((company) => {

                        return (
                            <div className={`${style.card} col-sm-3 col-md-4`}> 
                           <div className={`${style.card_head}`}>
                                <Card  >
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
                                    <a  className={`${style.buttonText}`} href={company.linkToApply} target="blank"> Apply Now</a>
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
