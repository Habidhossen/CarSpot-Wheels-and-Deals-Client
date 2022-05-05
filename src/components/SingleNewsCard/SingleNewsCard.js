import React from "react";
import "./SingleNewsCard.css";

const SingleNewsCard = ({ news }) => {
  const { title, desc, date, image } = news;

  return (
    <div className="col">
      <div className="news-card">
        <img className="news-card-img" src={image} alt="" />
        <div className="p-3">
          <p className="news-card-sub-title">{date}</p>
          <h1 className="news-card-title">{title}</h1>
          <p className="news-card-text">
            {desc}...<span>Read more</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsCard;
