import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./UpdateInventory.css";

const UpdateInventory = () => {
  const { inventoryID } = useParams();
  const [inventory, setInventory] = useState({});

  // load data
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${inventoryID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventory]);

  // handle quantity delivered button
  const handleDeliveredBtn = () => {
    const quantity = parseInt(inventory.quantity) - 1; //old-quantity - 1
    const updatedQuantity = { quantity }; //create quantity object

    // update quantity
    fetch(`http://localhost:5000/inventory/${inventoryID}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  // handle restock quantity
  const handleReStock = (event) => {
    event.preventDefault();
    const value = event.target.quantity.value; //input value
    const quantity = parseInt(inventory.quantity) + parseInt(value); //old-quantity + input value
    const updatedQuantity = { quantity }; //create quantity object

    // update quantity
    fetch(`http://localhost:5000/inventory/${inventoryID}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();
      });
  };

  return (
    <div className="container mx-auto update-inventory-container row">
      <div className="col-6">
        <img className="inventory-card-img" src={inventory.imageURL} alt="" />
      </div>
      <div className="col-6">
        <h6 className="update-quantity-text">
          Id: <span>{inventory._id}</span>
        </h6>
        <h6 className="update-quantity-text">
          Email: <span>{inventory.userEmail}</span>
        </h6>
        <h6 className="update-quantity-text">
          Product Name: <span>{inventory.productName}</span>
        </h6>
        <h6 className="update-quantity-text">
          Supplier Name: <span>{inventory.supplierName}</span>
        </h6>
        <h6 className="update-quantity-text">
          Price: <span>{inventory.price}</span>
        </h6>
        <h6 className="update-quantity-text">
          Quantity: <span>{inventory.quantity}</span>
        </h6>

        <div className="mt-3">
          <form onSubmit={handleReStock}>
            <p className="update-quantity-text text-success mb-1">
              Restock the Items
            </p>
            <div className="d-flex">
              <Form.Control
                className="w-75"
                type="number"
                name="quantity"
                placeholder="Enter Quantity"
                required
              />
              <input
                className="restock-btn w-25 ms-2"
                type="submit"
                value="Restock"
              />
            </div>
          </form>
          <div className="d-flex justify-content-between mt-3">
            <button
              onClick={handleDeliveredBtn}
              className="delivered-btn w-100 me-2"
            >
              Delivered
            </button>
            <Link to="/inventory" className="manage-inventories-btn ms-2">
              Manage Inventories{" "}
              <FontAwesomeIcon className="ms-1" icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateInventory;
