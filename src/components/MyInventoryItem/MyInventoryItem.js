import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import useInventories from "../../hooks/useInventories";
import Loader from "../Loader/Loader";

const MyInventoryItem = () => {
  // get user from react-firebase-hooks auth state
  const [user] = useAuthState(auth);

  // get all inventories by hooks and api
  const [inventories, setInventories, loader] = useInventories();

  // filtering items by user Email
  const filteredItems = inventories.filter(
    (item) => item.userEmail === user.email
  );

  // handle delete inventory button
  const handleInventoryDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");

    if (confirm) {
      fetch(`https://radiant-waters-02359.herokuapp.com/inventory/${id}`, {
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
            <h3 className="add-item-title">My Products:</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Product</th>
                  <th>Supplier</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((product) => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.productName}</td>
                    <td>{product.supplierName}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <button
                        onClick={() => handleInventoryDelete(product._id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete{" "}
                        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
};

export default MyInventoryItem;
