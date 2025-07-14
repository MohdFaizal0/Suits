import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./theme.scss";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Suits from "./components/Suits/Suits";
import Shirts from "./components/Shirt/Shirt";
import Chinos from "./components/Chinos/Chinos";
import ProductDescription from "./components/productDescription/ProductDescription";
import { CartProvider } from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(newQuantity) } : item
      )
    );
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const clearCart = () => setCartItems([]);
  return (
    <>
      <CartProvider
        value={{
          cartItems,
          addToCart,
          removeFromCart,
          clearCart,
          updateQuantity,
        }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/suits" element={<Suits />} />
            <Route path="/shirts" element={<Shirts />} />
            <Route path="/chinos" element={<Chinos />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/ProductDescription/:id"
              element={<ProductDescription />}
            />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </>
  );
};

export default App;
