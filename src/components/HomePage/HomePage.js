import React from "react";
import CarLatestNews from "../CarLatestNews/CarLatestNews";
import ClientReviews from "../ClientReviews/ClientReviews";
import Footer from "../Footer/Footer";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      {/* carousel section start here */}
      <HomeCarousel />
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
