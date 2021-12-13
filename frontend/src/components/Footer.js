import React, { useEffect, useState } from "react";
import "./footer.css";

const Footer=()=>{
return(

<footer>
		{/* <!-- Social media icons line Start --> */}
		<div className="sm-handle">
			<a href="https://www.instagram.com/kartikbhavsar17/" target="_blank" className="sm-button">
				<i className="fab fa-instagram"> </i>
			</a>

			<a href="https://www.linkedin.com/in/kartikey-bhawsar-a0710318b/" target="_blank" className="sm-button">
				<i className="fab fa-linkedin"> </i>
			</a>

			<a href="https://www.facebook.com/kartik.bhavsar2" target="_blank" className="sm-button">
				<i className="fab fa-facebook-f"> </i>
			</a>

			<a href="https://github.com/kartikey-bhawsar" target="_blank" className="sm-button">
				<i className="fab fa-github"> </i>
			</a>
		</div>

		<div className="footer-links">

			<div className="menu">
				<h4 className="menu-title">Menu</h4>
				<a href="/" className="menu-links">Join Us</a>
				<a href="#aboutus" className="menu-links">About</a>
			</div>

			<div className="menu">
				<h4 className="menu-title">Other Pages</h4>
				<a href="/feedback" className="other-links">Contact Us</a>
				<a href="/" className="other-links">Privacy Policy</a>
				<a href="/" className="other-links">FAQ</a>
				<a href="/" className="other-links">Terms of use</a>
			</div>

		</div>

		<p className="copyright">&copy; cacheandconnect.com 2021 </p>

	</footer>
)
}

export default Footer;