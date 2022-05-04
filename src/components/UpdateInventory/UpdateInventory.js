import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateInventory = () => {
  const { inventoryID } = useParams();
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${inventoryID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  // handle quantity delivered button
  const handleDeliveredBtn = () => {
    const quantity = inventory.quantity;

    const newQuantity = quantity - 1;

    console.log(newQuantity);
  };

  // handle restock quantity
  const handleReStock = (event) => {
    event.preventDefault();
    const value = event.target.quantity.value;
    console.log(value);
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