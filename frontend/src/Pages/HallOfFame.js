import React from 'react'
import styles from "../assets/css/HallOfFame.module.css";
import Navbar from '../components/Navbar';

function HallOfFame() {
    return (
        <>
            <Navbar />
            <div className="col d-flex justify-content-center">
                <div className={styles.card}>
                    <h3>Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscin aliquam. Sed iumsan massa id aliquam. Sed iumsan Integer massa idg elit. Integer varius accumsumsan massa iIntegerd aliquam.</p>
                    {/* <button>button</button> */}
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
