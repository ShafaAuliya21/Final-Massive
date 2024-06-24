// AddressCard.js
import React from "react";
import "./AddressCard.css";

const AddressCard = ({ name, phone, address, city, mainAddress }) => {
  return (
    <div className="card address-card">
      <div className="card-body">
        <h5 className="card-title">
          <strong>{name}</strong> | {phone}
        </h5>
        <p className="card-text">{address}</p>
        <p className="card-text">{city}</p>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <small className="text-muted">{mainAddress}</small>
          <div>
            <button
              className="btn btn-outline-warning btn-sm p-2"
              style={{
                backgroundColor: "white",
                marginRight: "12px",
                borderRadius: "10px",
              }}
            >
              Hapus
            </button>
            <button className="btn btn-yellow text-white">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
