import React, { useState } from "react";
import useCart from "../Context/CartContext";
import { Navigate, useNavigate } from "react-router-dom";
import { GoTrash } from "react-icons/go";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, setCartItems } = useCart();
  console.log(cartItems);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const navigate = useNavigate();
  const handleClicked = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="container-fluid mt-5">
      <h4>Your Cart</h4>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={item.id}
              className="row align-items-center border-bottom pb-4 mx-auto mt-4"
              style={{ maxWidth: "1100px" }}
            >
              <div
                className="col-2 mb-3 mb-md-0 py-3 d-flex justify-content-center"
                style={{ backgroundColor: "#f9f9f9" }}
              >
                <img
                  src={item.image}
                  className="img-fluid"
                  style={{ maxHeight: "160px", objectFit: "contain" }}
                  alt={item.name}
                />
              </div>

              <div className="col-9">
                <p className="mb-2 fw-semibold">{item.name}</p>
                <div className="d-flex align-items-center gap-2">
                  <label
                    htmlFor={`qty-${index}`}
                    className="form-label mb-0 pe-2"
                  >
                    Qty
                  </label>
                  <select
                    value={item.quantity}
                    onChange={(e) => {
                      updateQuantity(item.id, e.target.value);
                    }}
                    className="form-select w-auto"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option value={i + 1} key={i}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-link text-danger d-flex gap-1 py-1 px-0 w-25"
                    onClick={() => handleClicked(item)}
                  >
                    <GoTrash className="fs-4" />
                    Remove
                  </button>
                </div>
              </div>

              <div className="col-1">
                <p className="fw-bold mb-0">${item.price}</p>
              </div>
            </div>
          ))}

          <div className="container-fluid mt-4">
            <div className="row p-3 d-flex justify-content-end">
              <div className="col-12 col-md-4">
                <div className="d-flex justify-content-between fs-5 pt-4 px-1">
                  <p>Subtotal</p>
                  <p className="fw-bold">${subtotal}</p>
                </div>
                <p
                  className="px-1 pb-3 text-muted"
                  style={{ fontSize: "0.9rem" }}
                >
                  Tax included and shipping calculated at checkout.
                </p>
                <div className="d-flex w-100">
                  <input
                    type="text"
                    className="form-control rounded-start p-3"
                    placeholder="Coupon Code:"
                  />
                  <button className="btn btn-outline-dark rounded-end py-3 px-4">
                    Apply
                  </button>
                </div>
                <div className="d-flex flex-column gap-3 mt-4">
                  <button className="btn btn-dark w-100">Check out</button>
                  <button
                    onClick={() => navigate("/")}
                    className="btn border-dark w-100"
                  >
                    Continue shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
