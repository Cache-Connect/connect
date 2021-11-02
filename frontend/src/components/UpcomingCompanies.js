import React, { useState, useEffect } from 'react';
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

    return (
        <div className="container-fluid">
            <div className={`row`}>
                {
                    upcomingCompanies.map((company) => {
                        return (
                            <h1 className="col-sm-3 col-md-3">{company.companyName}</h1>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UpcomingCompanies
