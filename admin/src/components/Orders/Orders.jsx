import React from "react";
import { useState } from "react";
import "./orders.css";

const Orders = () => {
  const [orders, setOrders] = useState(null);
  return (
    <>
      <div className="hero container-fluid w-75 position-absolute end-0 p-0">
        <div className="container-fluid d-flex gap-3 align-items-center bg-white px-4 py-2">
          <p className="pt-3">All Orders</p>
          <select name="sort" id="sort" className="rounded p-2">
            <option value="sort-by">Sort By</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>

          <select name="list-no" id="list-no" className="rounded p-2">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
          <span className="d-flex">
            <input type="text" placeholder="Search" className="rounded p-2" />
            <button className="border container-fluid align-text-middle d-flex flex-column justify-content-center align-items-center">
              search
            </button>
          </span>

          <select name="actions" id="actions" className="rounded p-2">
            <option value="action">Action</option>
            <option value="Another Action">Another Action</option>
            <option value="Something Else">Something Else</option>
          </select>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">DATE</th>
              <th scope="col">TOTAL</th>
              <th scope="col">STATUS</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <th scope="row">1</th>
              <td>Cortie Gemson</td>
              <td>May 23,2025</td>
              <td>$239,00</td>
              <td>Processing</td>
              <td>
                <button>dots</button>
              </td>
            </tr>
            {orders &&
              order?.data?.map((data) => {
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.date}</td>
                  <td>data.price</td>
                  <td>{data.status}</td>
                  <td>
                    <button>dots</button>
                  </td>
                </tr>;
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
