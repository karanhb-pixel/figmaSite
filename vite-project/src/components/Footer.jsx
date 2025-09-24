import React from "react";

const Footer = () => {
  return (
    <div className="footer_Section container">
      <div className="links-container">

      
      <div className="footer-links">
        <h3 className="footer-title">Quick Links</h3>
        <ul className="footer-link-list">
          <li className="footer-link-item">
            <a href="#">About Us</a>
          </li>
          <li className="footer-link-item">
            <a href="#">Contact Us</a>
          </li>
          <li className="footer-link-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="footer-link-item">
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
      </div>
      <div className="footer-links">
        <h3 className="footer-title">Course</h3>
        <ul className="footer-link-list">
          <li className="footer-link-item">
            <a href="#">Log In</a>
          </li>
          <li className="footer-link-item">
            <a href="#">Download</a>
          </li>
          <li className="footer-link-item">
            <a href="#">All Courses</a>
          </li>
          
        </ul>
      </div>
      <div className="footer-links">
        <h3 className="footer-title">Contact Us</h3>
        <ul className="footer-link-list">
          <li className="footer-link-item">
            <a href="#">contact@email.com</a>
          </li>
          <li className="footer-link-item social-icons">
            <a href="#">
              <img src="facebook_icon.png" alt="Facebook Icon" />
            </a>
            <a href="#">
              <img src="instagram_icon.png" alt="Instragram Icon" />
            </a>
          </li>
          <li className="footer-link-item">
            <form action="#">
              <div className="input-with-button">

              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn dark">
                Subscribe
              </button>
              </div>
              
            </form>
          </li>
          
        </ul>
      </div>
      </div>
      <p className="footer-note">© 2024 GameDev. All rights reserved.</p>
    </div>
  );
};

export default Footer;
