import React, { useState } from "react";
import sample1 from "../../assets/suits grid/sample1.png";
import sample2 from "../../assets/suits grid/sample2.png";
import sample3 from "../../assets/suits grid/sample3.png";
import "./chinos.css";
import { useNavigate } from "react-router-dom";

const Suits = () => {
  const navigate = useNavigate();
  const handleCliked = (id) => {
    console.log(id);
    navigate(`/ProductDescription/${id}`);
  };

  const productData = [
    {
      id: 1,
      name: "Loro piece ",

      description: "100% Wool by Loro Piana, Italy",
      price: 1499,
      image: sample1,
    },
    {
      id: 2,
      name: "Loro piece ",

      description: "100% Wool by Loro Piana, Italy",
      price: 1499,
      image: sample2,
    },
    {
      id: 3,
      name: "Loro piece ",

      description: "100% Wool by Loro Piana, Italy",
      price: 1499,
      image: sample3,
    },
    {
      id: 4,
      name: "Loro Piana Suit",
      description: "100% Wool by Loro Piana, Italy",
      price: 1499,
      image: sample1,
    },
    {
      id: 5,
      name: "Loro piece ",

      description: "100% Wool by Loro Piana, Italy",
      price: 1499,
      image: sample1,
    },
    {
      id: 6,
      name: "Loro piece ",

      description: "100% Wool by Loro Piana, Italy",
      price: 1499,
      image: sample1,
    },
    {
      id: 7,
      name: "Loro piece ",

      description: "100% Wool by Loro Piana, Italy",
      price: 1499,
      image: sample1,
    },
    {
      id: 8,
      name: "Classic Sneakers",

      description: "100% Wool by Loro Piana, Italy",
      price: 1499,
      image: "/img/shoe1.jpg",
    },
  ];
  console.log(productData);

  return (
    <>
      <div className="container-fluid py-5" style={{ maxWidth: "1200px" }}>
        <h2 className="mb-4 text-center">Fitted Suits</h2>
        <div className="row g-4">
          {productData.map((data) => (
            <div className="col-12 col-sm-6 col-lg-4 d-flex" key={data.id}>
              <div
                className="card h-100 w-100 product-card"
                onClick={() => handleCliked(data.id)}
              >
                <div className="img-wrapper">
                  <img
                    src={data.image}
                    className="card-img-top"
                    alt={data.name}
                    style={{ height: "370px", objectFit: "contain" }}
                  />
                </div>
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <h5 className="card-title mb-2">{data.name}</h5>
                    <p className="card-text text-muted small mb-2">
                      {data.description}
                    </p>
                  </div>
                  <p className="fw-bold mb-0">₹{data.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Suits;
