import React from 'react'
import style from '../assets/css/Error.module.css';
const Error = () => {
    return (
        <>
          <div id="background"></div>
<div className={`${style.top}`}>
  <h1 className={`${style.h1}`}>404</h1>
  <h3 className={`${style.h3}`}>page not found</h3>
</div>
<div className={`${style.container}`}>
  <div className={`${style.ghostcopy}`}>
    <div className={`${style.one}`}></div>
    <div className={`${style.two}`}></div>
    <div className={`${style.three}`}></div>
    <div className={`${style.four}`}></div>
  </div>
  <div className={`${style.ghost}`}>
    <div className={`${style.face}`}>
      <div className={`${style.eye}`}></div>
      <div className={`${style.eyeright}`}></div>
      <div className={`${style.mouth}`}></div>
    </div>
  </div>
  <div className={`${style.shadow}`}></div>
</div>
<div className={`${style.bottom}`}>
  <p className={`${style.p}`}>Boo, looks like a ghost stole this page!</p>
 
  <div className={`${style.buttons}`}>
  <a href='/' >  <button className={`${style.btn}`}>Home</button> </a>
   
  </div>
</div>


       </>
    )
}

export default Error