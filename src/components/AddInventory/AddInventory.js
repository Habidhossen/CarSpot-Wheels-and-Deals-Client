import React from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";

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

    console.log(
      userEmail,
      productName,
      supplierName,
      price,
      quantity,
      imageURL,
      desc
    );
  };

  return (
    <div>
      <div className="col-5 mx-auto">
        <h3>Add new Product:</h3>

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
              type="text"
              placeholder="$ Price"
              name="price"
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
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
      </div>
    </div>
  );
};

export default AddInventory;