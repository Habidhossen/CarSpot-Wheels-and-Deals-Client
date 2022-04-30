import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleInventoryCard from "../SingleInventoryCard/SingleInventoryCard";

const InventoryItems = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("carsData.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <section>
      <div className="container mx-auto">
        <h1 className="section-title">
          <span>Inventory</span> Items
        </h1>
        <div className="row row-cols-3 g-3">
          {cars.map((car) => (
            <SingleInventoryCard key={car.id} car={car} />
          ))}
        </div>
        <div className="d-flex justify-content-end mt-3">
          <Link to="" className="see-more-btn">
            Manage Inventories <FontAwesomeIcon icon={faArrowRightLong} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InventoryItems;
