import React from "react";
import { Table } from "react-bootstrap";
import useInventories from "../../hooks/useInventories";

const InventoryItems = () => {
  const [inventories, setInventories] = useInventories();

  // handle delete inventory button
  const handleInventoryDelete = (id) => {
    fetch(`http://localhost:5000/inventory/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingProduct = inventories.filter(
            (product) => product._id !== id
          );
          setInventories(remainingProduct);
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="login-bg">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Admin</th>
              <th>Name</th>
              <th>Supplier</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {inventories.map((product) => (
              <tr key={product._id}>
                <td>{product.userEmail}</td>
                <td>{product.productName}</td>
                <td>{product.supplierName}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button
                    onClick={() => handleInventoryDelete(product._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default InventoryItems;
