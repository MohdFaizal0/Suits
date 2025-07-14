import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  updateQuantity: () => {},
});

export const CartProvider = CartContext.Provider;

export default function useCart() {
  return useContext(CartContext);
}
