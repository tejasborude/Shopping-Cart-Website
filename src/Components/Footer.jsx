import React from "react"
import "./Footer.css"

export default function Footer(){
    return(
        <>
        <footer className="footer">
<div className="container">
  <div className="footer-section">
    <h4>About Us</h4>
    <p>Learn more about in website ...!</p>
  </div>
  <div className="footer-section">
    <h4>Customer Service</h4>
    <ul>
      <li><a href="/contact">Contact Us..!</a></li>
    </ul>
  </div>
  <div className="footer-section">
    <h4>Follow Us</h4>
    <ul className="social-media">
      <li><a href="https://www.facebook.com">Facebook</a></li>
      <li><a href="https://github.com/tejasborude">Github</a></li>
      <li><a href="https://instagram">Instagram</a></li>
      <li><a href="https://www.linkedin.com/in/tejas-borude-0331102ba/">LinkedIn</a></li>
    </ul>
  </div>
</div>
<div className="footer-bottom">
  <p>&copy; 2024 Your Company. All rights reserved.</p>
</div>
</footer>
        </>
    )
}