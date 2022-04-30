import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleReviewCard from "../SingleReviewCard/SingleReviewCard";

const CarLatestNews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("clientReviewsData.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section>
      <div className="container mx-auto">
        <h1 className="section-title">Latest news</h1>
        <div className="row row-cols-3 g-3">
          {reviews.slice(0, 6).map((review) => (
            <SingleReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="d-flex justify-content-end mt-3">
          {/* <button className="not-found-btn">See all reviews</button> */}
          <Link to="" className="not-found-btn">
            See All News <FontAwesomeIcon icon={faArrowRightLong} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarLatestNews;
