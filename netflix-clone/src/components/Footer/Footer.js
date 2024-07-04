
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_row">
        <div className="footer_column">
          <ul>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
        </div>
        <div className="footer_column">
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
        </div>
        <div className="footer_column">
          <ul>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>
        </div>
        <div className="footer_column">
          <ul>
            <li>Media Center</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="footer_row">
        <button className="service_code">Service Code</button>
      </div>
      <div className="footer_row">
        <p>&copy; 2024 Netflix, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;

