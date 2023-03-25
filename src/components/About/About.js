import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container about-container">
      <div className="">
        <h3 className="about-title">CarSpot - Wheels and Deals</h3>
        <p className="about-desc">
          CarSpot - Wheels and Deals is a car warehouse website that deals with
          cars. The client can view car information such as price, stock, etc
          and Admin can add a new product, and manage products such as stock
          cars, etc. During all this process admin have to log in for accessing
          those features. I implement two login systems which are a google login
          and another is an email password-based login system. I implement
          another feature where a specific person log in with his email and he
          will be able to see her adding products. That's all.
        </p>
      </div>
    </div>
  );
};

export default About;
