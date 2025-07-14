import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./theme.scss";
import Product from "./components/product/Product";
import AddProducts from "./components/Addproduct/AddProducts.jsx";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Orders from "./components/Orders/Orders.jsx";
import Customers from "./components/Customers/Customers.jsx";
import Buyers from "./components/Buyers/Buyers.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/Products" element={<Product />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/AddProducts" element={<AddProducts />} />
          <Route path="/Buyers" element={<Buyers />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
