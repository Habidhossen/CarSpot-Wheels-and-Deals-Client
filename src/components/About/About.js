import React from "react";
import profileImg from "../../assets/images/profile-img.jpg";
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
      <div className="mt-4">
        <h3 className="about-title">About me</h3>
        <p className="about-desc">
          Hello! I'm <span>Habid Hossen Hridoy.</span> I'm from Chattogram,
          Bangladesh. I am a student of Computer Science and Engineering. I like
          to Code, Design, Innovate and Experiment. I want to become a Full
          Stack Developer within the next 3-4 months.
        </p>
        <div className="d-flex justify-content-center">
          <img className="about-img" src={profileImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
