import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useInventories from "../../hooks/useInventories";
import CarLatestNews from "../CarLatestNews/CarLatestNews";
import ClientReviews from "../ClientReviews/ClientReviews";
import Footer from "../Footer/Footer";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import SingleInventoryCard from "../SingleInventoryCard/SingleInventoryCard";
import "./HomePage.css";

const HomePage = () => {
  const [inventories] = useInventories();

  return (
    <div>
      {/* carousel section start here */}
      <HomeCarousel />
      {/* carousel section end here */}

      {/* inventory-items section start here */}
      <section>
        <div className="container mx-auto">
          <h1 className="section-title">
            <span>Inventory</span> Items
          </h1>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
            {inventories.slice(0, 6).map((product) => (
              <SingleInventoryCard key={product._id} product={product} />
            ))}
          </div>
          <div className="d-flex justify-content-end mt-3">
            <Link to="/inventory" className="see-more-btn">
              Manage Inventories <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </div>
        </div>
      </section>
      {/* inventory-items end here */}

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
