



import React from "react";
import "./Footer.css";

function Footer() {
  const handleClick = (url) => {
    window.location.href = url; // You can replace this with navigation logic if using React Router
  };

  return (
    <div className="footer_container">
      <div className="footer_row">
        <div className="footer_column">
          <ul>
            <li onClick={() => handleClick("/faq")}>FAQ</li>
            <li onClick={() => handleClick("/investor-relations")}>Investor Relations</li>
            <li onClick={() => handleClick("/privacy")}>Privacy</li>
            <li onClick={() => handleClick("/speed-test")}>Speed Test</li>
          </ul>
        </div>
        <div className="footer_column">
          <ul>
            <li onClick={() => handleClick("/help-center")}>Help Center</li>
            <li onClick={() => handleClick("/jobs")}>Jobs</li>
            <li onClick={() => handleClick("/cookie-preferences")}>Cookie Preferences</li>
            <li onClick={() => handleClick("/legal-notices")}>Legal Notices</li>
          </ul>
        </div>
        <div className="footer_column">
          <ul>
            <li onClick={() => handleClick("/account")}>Account</li>
            <li onClick={() => handleClick("/ways-to-watch")}>Ways to Watch</li>
            <li onClick={() => handleClick("/corporate-information")}>Corporate Information</li>
            <li onClick={() => handleClick("/only-on-netflix")}>Only on Netflix</li>
          </ul>
        </div>
        <div className="footer_column">
          <ul>
            <li onClick={() => handleClick("/media-center")}>Media Center</li>
            <li onClick={() => handleClick("/terms-of-use")}>Terms of Use</li>
            <li onClick={() => handleClick("/contact-us")}>Contact Us</li>
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
