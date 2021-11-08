/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from "../assets/css/HallOfFame.module.css";
import Navbar from '../components/Navbar';
import ln from "../assets/img/slider/ln.png";
function HallOfFame() {
    return (
        <>
            <Navbar />
            <div className="col d-flex justify-content-center">
                <div className={styles.card}>
                    <div className={styles.sname}>KARTIKEY BHAWSAR</div>
                    <div className={styles.profile}>SDE @ Walkover</div>
                    <div className={styles.branch}> COMPUTER SCIENCE AND ENGINEERING </div>
                    <div className={styles.type}> On-Campus : Placement</div>
                    <div className={styles.pack}>(10 LPA )</div>
                    <div className={styles.batch}>Batch of 2022</div>
                    <div><a href="#"><img className={styles.img} src={ln}></img></a></div>
                </div>

                <div className={styles.card}>
                    <div className={styles.sname}>KARTIKEY BHAWSAR</div>
                    <div className={styles.profile}>SDE @ Walkover</div>
                    <div className={styles.branch}> COMPUTER SCIENCE AND ENGINEERING 

                    </div>
                    <div className={styles.type}> On-Campus : Placement</div>
                    <div className={styles.pack}>(10 LPA )</div>
                    <div className={styles.batch}>Batch of 2022</div>
                    
                    <div><a href="#"><img className={styles.img} src={ln}></img></a></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.sname}>KARTIKEY BHAWSAR</div>
                    <div className={styles.profile}>SDE @ Walkover</div>
                    <div className={styles.branch}> COMPUTER SCIENCE AND ENGINEERING 

                    </div>
                    <div className={styles.type}> On-Campus : Placement</div>
                    <div className={styles.pack}>(10 LPA )</div>
                    <div className={styles.batch}>Batch of 2022</div>
                    
                    <div><a href="#"><img className={styles.img} src={ln}></img></a></div>
                </div>
                <div className={styles.card}>
                    <h3>Heading</h3>
                    <p>Lorem ipsum dolor sit amet, Integer consectetur adipiscing elit. Integer varius accumsumsan massa id aliquam.</p>
                    {/* <button>button</button> */}
                </div>

                <div className={styles.card}>
                    <h3>Heading</h3>
                    <p>Lorem ipsum dolor sit amet, Integer consectetur adipiscing elit. Integer varius accumsumsan massa id aliquam.</p>
                    {/* <button>button</button> */}
                </div>

            </div>
        </>
    )
}

export default HallOfFame;
