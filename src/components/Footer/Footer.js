import React from "react";
import "./Footer.css";

const Footer = () => {
  // get the current year
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="row">
        <div className="col">
          <a href="">Twitter</a>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Youtube</a>
        </div>
        <div className="col footer-desc">
          <p>
            Copyright &#169; {year} <strong>CarSpot - Wheels and Deals.</strong>{" "}
            All Rights Reserved
          </p>
          <div className="d-flex">
            <a href="">Privacy Policy</a>
            <div className="vertical-line-sm"></div>
            <a href="">Terms of Use</a>
            <div className="vertical-line-sm"></div>
            <a href="">About Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
