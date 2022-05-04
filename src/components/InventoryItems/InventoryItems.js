import React from "react";
import { Table } from "react-bootstrap";
import useInventories from "../../hooks/useInventories";

const InventoryItems = () => {
  const [inventories] = useInventories();

  return (
    <div className="container mx-auto mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Supplier</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((product) => (
            <tr>
              <td>{product._id}</td>
              <td>{product.productName}</td>
              <td>{product.supplierName}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default InventoryItems;
