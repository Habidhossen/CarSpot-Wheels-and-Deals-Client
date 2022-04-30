import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleReviewCard from "../SingleReviewCard/SingleReviewCard";
import "./ClientReviews.css";

const ClientReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("clientReviewsData.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section>
      <div className="container mx-auto">
        <h1 className="section-title">What our clients say</h1>
        <div className="row row-cols-3 g-3">
          {reviews.map((review) => (
            <SingleReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="d-flex justify-content-end mt-3">
          {/* <button className="not-found-btn">See all reviews</button> */}
          <Link to="" className="not-found-btn">
            See All Reviews <FontAwesomeIcon icon={faArrowRightLong} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
