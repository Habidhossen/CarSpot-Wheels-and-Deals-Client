import React from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../Firebase/firebase.init";
import "./AddInventory.css";

const AddInventory = () => {
  // get user from react-firebase-hooks auth state
  const [user] = useAuthState(auth);

  const handleAddItem = (event) => {
    event.preventDefault();
    const userEmail = user.email;
    const productName = event.target.productName.value;
    const supplierName = event.target.supplierName.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const imageURL = event.target.url.value;
    const desc = event.target.desc.value;
    event.target.reset();

    // get all information in one object
    const product = {
      userEmail,
      productName,
      supplierName,
      price,
      quantity,
      imageURL,
      desc,
    };

    // send data to the server
    fetch("https://carspot-server.onrender.com/inventory", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => data);
    toast.success("Product added", {
      theme: "colored",
      autoClose: 2000,
    });
  };

  return (
    <div>
      <div className="col-11 col-sm-11 col-md-6 col-lg-5 mx-auto add-item-container">
        <h3 className="add-item-title">Add new Product:</h3>

        <Form onSubmit={handleAddItem}>
          <Form.Group className="mb-2">
            <Form.Control placeholder={user?.email} disabled />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              placeholder="Product name"
              name="productName"
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              placeholder="Supplier name"
              name="supplierName"
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="number"
              placeholder="$Price"
              name="price"
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="number"
              placeholder="Quantity"
              name="quantity"
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              placeholder="Image url"
              name="url"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              name="desc"
              placeholder="Product desc..."
              required
            />
          </Form.Group>
          <button type="submit" className="form-login-btn">
            Add Inventory
          </button>
        </Form>
        {/* Toast Container */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddInventory;
