import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h6>Inventory ID: {inventory._id}</h6>
      <h6>Inventory Name: {inventory.name}</h6>
      <h1>Quantity: {inventory.quantity}</h1>
      <button onClick={handleDeliveredBtn} className="btn btn-danger">
        Delivered
      </button>
      <div className="mt-3">
        <form onSubmit={handleReStock}>
          <input
            type="number"
            name="quantity"
            placeholder="Enter value"
            required
          />
          <input className="btn btn-primary" type="submit" value="Restock" />
        </form>
      </div>
    </div>
  );
};

export default UpdateInventory;
