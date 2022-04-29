import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../assets/images/slider-1.png";
import slider2 from "../../assets/images/slider-2.png";
import slider3 from "../../assets/images/slider-3.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      {/* carousel section start here */}
      <section>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={slider1} alt="First slide" />
            <Carousel.Caption>
              <div className="captions">
                <h3>
                  Welcome to <span>Car</span>Spot
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                  eum debitis recusandae omnis praesentium placeat.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={50000}>
            <img className="d-block w-100" src={slider2} alt="Second slide" />
            <Carousel.Caption>
              <div className="captions">
                <h3>
                  Thousand of <span>car</span> your choice
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                  eum debitis recusandae omnis praesentium placeat.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slider3} alt="Third slide" />
            <Carousel.Caption>
              <div className="captions">
                <h3>
                  Find your <span>dream</span> car
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                  eum debitis recusandae omnis praesentium placeat.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      {/* carousel section end here */}
    </div>
  );
};

export default HomePage;
