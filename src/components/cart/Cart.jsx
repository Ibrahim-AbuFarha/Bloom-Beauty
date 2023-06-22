import React, { useEffect } from "react";

import { CartProduct } from "./CartProduct";
import "./Cart.css";
const cartProducts = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQeYeClZMrqqq2aaTT2UdbuWtVktz8jQ9gw&usqp=CAU",
    title: "Product 1",
    price: 10.99,
    quantity: 2,
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQeYeClZMrqqq2aaTT2UdbuWtVktz8jQ9gw&usqp=CAU",
    title: "Product 2",
    price: 19.99,
    quantity: 1,
  },
  // Add more products as needed
];

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-products card">
        <h2>Cart</h2>
        {cartProducts.map((product) => (
          <CartProduct product={product} />
        ))}
      </div>
      <div className="cart-summary card">
        <h2>Summary</h2>
        <div className="summary-item">
          <p>Total Products:</p>
          <p>{cartProducts.length}</p>
        </div>
        <div className="summary-item">
          <p>Total Price:</p>
          <p>564</p>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
