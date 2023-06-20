import { createContext, useState } from "react";

const CartContext = createContext();
export default CartContext;

export function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  const addItem = () => {};

  const removeItem = () => {};

  const totalPrice = () => {};

  const value = { addItem, removeItem, cartItem, totalPrice };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
