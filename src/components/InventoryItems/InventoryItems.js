import {
  faAdd,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventories from "../../hooks/useInventories";
import Loader from "../Loader/Loader";
import "./InventoryItems.css";

const InventoryItems = () => {
  const [inventories, setInventories, loader] = useInventories();

  // handle delete inventory button
  const handleInventoryDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");

    if (confirm) {
      fetch(`https://carspot-server.onrender.com/inventory/${id}`, {
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
    }
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="container my-5">
          <div className="table-container-bg">
            <div className="d-flex justify-content-between mb-3">
              <h3 className="add-item-title mb-0 mt-2">All Products:</h3>
              <Link to="/add-inventory" className="btn btn-success">
                Add new product{" "}
                <FontAwesomeIcon className="ms-1" icon={faAdd} />
              </Link>
            </div>
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Admin Email</th>
                    <th>Product</th>
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
                        <div className="px-2 d-flex">
                          <Link
                            to={`/inventory/${product._id}`}
                            className="btn btn-primary btn-sm me-3 d-flex align-items-center"
                          >
                            Stock Update
                            <FontAwesomeIcon
                              className="ms-1"
                              icon={faPenToSquare}
                            ></FontAwesomeIcon>
                          </Link>
                          <button
                            onClick={() => handleInventoryDelete(product._id)}
                            className="btn btn-danger btn-sm d-flex align-items-center"
                          >
                            Delete
                            <FontAwesomeIcon
                              className="ms-1"
                              icon={faTrashCan}
                            ></FontAwesomeIcon>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InventoryItems;
