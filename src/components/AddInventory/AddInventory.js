import React from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";

const AddInventory = () => {
  // get user from react-firebase-hooks auth state
  const [user] = useAuthState(auth);

  return (
    <div>
      <div className="col-5 mx-auto">
        <h3>Add new Product:</h3>

        <Form>
          <Form.Group className="mb-2">
            <Form.Control placeholder={user?.email} name="name" disabled />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              placeholder="Product name"
              name="name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              placeholder="Supplier name"
              name="name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              placeholder="$ Price"
              name="name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              placeholder="Quantity"
              name="name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              placeholder="Image url"
              name="name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
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
