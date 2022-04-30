import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleNewsCard from "../SingleNewsCard/SingleNewsCard";

const CarLatestNews = () => {
  const [carNews, setCarNews] = useState([]);

  useEffect(() => {
    fetch("carLatestNewsData.json")
      .then((res) => res.json())
      .then((data) => setCarNews(data));
  }, []);

  return (
    <section>
      <div className="container mx-auto">
        <h1 className="section-title">Latest news</h1>
        <div className="row row-cols-3 g-3">
          {carNews.map((news) => (
            <SingleNewsCard key={news.id} news={news} />
          ))}
        </div>
        <div className="d-flex justify-content-end mt-3">
          <Link to="" className="not-found-btn">
            See All News <FontAwesomeIcon icon={faArrowRightLong} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarLatestNews;
