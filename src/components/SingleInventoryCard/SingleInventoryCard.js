import React from "react";
import { Link } from "react-router-dom";
import "./SingleInventoryCard.css";

const SingleInventoryCard = ({ product }) => {
  const {
    _id,
    userEmail,
    productName,
    supplierName,
    price,
    quantity,
    imageURL,
    desc,
  } = product;

  return (
    <div className="col">
      <div className="inventory-card">
        <img className="inventory-card-img" src={imageURL} alt="" />
        <h5 className="inventory-card-supplier">
          Supplier: <span>{supplierName}</span>
        </h5>
        <h1 className="inventory-card-title">{productName}</h1>
        <h3 className="inventory-card-price">$ {price}</h3>
        <p className="inventory-card-desc">{desc}</p>
        <div>
          <h5 className="inventory-card-quantity">
            Quantity: <b>{quantity}</b>{" "}
            <span className="badge ms-1">In stock</span>
          </h5>
        </div>
        <div className="d-flex justify-content-center">
          <Link to={`/inventory/${_id}`} className="inventory-card-btn">
            Stock Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleInventoryCard;
