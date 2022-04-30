import React from "react";
import "./Footer.css";

const Footer = () => {
  // get the current year
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-desc">
        <p>
          Copyright &#169; {year} <span>CarSpot - Wheels and Deals.</span> All
          Rights Reserved
        </p>
        <div className="d-flex align-items-center justify-content-center">
          <a href="">Privacy Policy</a>
          <div className="vertical-line-sm"></div>
          <a href="">Terms of Use</a>
          <div className="vertical-line-sm"></div>
          <a href="">About Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
