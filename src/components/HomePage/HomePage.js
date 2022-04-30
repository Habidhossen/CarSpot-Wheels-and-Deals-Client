import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../assets/images/slider-1.png";
import slider2 from "../../assets/images/slider-2.png";
import slider3 from "../../assets/images/slider-3.png";
import CarLatestNews from "../CarLatestNews/CarLatestNews";
import ClientReviews from "../ClientReviews/ClientReviews";
import Footer from "../Footer/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      {/* carousel section start here */}
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption>
            <div className="captions">
              <h3>
                Welcome to <span>Car</span>Spot
              </h3>
              <p>
                If you're looking for promotional vehicles or modern classic
                imported vehicles, come to The CarSpot Warehouse. We are a
                genuine vehicle importer and wholesaler.
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
                If you're looking for promotional vehicles or modern classic
                imported vehicles, come to The CarSpot Warehouse. We are a
                genuine vehicle importer and wholesaler.
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
                If you're looking for promotional vehicles or modern classic
                imported vehicles, come to The CarSpot Warehouse. We are a
                genuine vehicle importer and wholesaler.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* carousel section end here */}

      {/* client-reviews section start here */}
      <ClientReviews />
      {/* client-reviews section end here */}

      {/* car-latest-news section start here */}
      <CarLatestNews />
      {/* car-latest-news section end here */}

      {/* footer start here */}
      <Footer />
      {/* footer end here */}
    </div>
  );
};

export default HomePage;
