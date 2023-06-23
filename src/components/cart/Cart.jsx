import React, { useContext, useEffect, useState } from "react";

import { CartProduct } from "./CartProduct";
import "./Cart.css";
import CartContext from "../../store/cartContext";
import axios from "axios";

const Cart = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isChecked, setIsChecked] = useState(false);
  const { cartItems, totalPrice, deleteAllItems,totalProducts } = useContext(CartContext);
  const handleCheckOut = () => {
    axios
      .post(`http://localhost:3001/orders`, {
        userId: user.id,
        orderItems: cartItems,
      })
      .then(() => {
        setIsChecked(true);
        setTimeout(() => deleteAllItems(), 5000);
      })
      //async return promise so settimeout expect to get call back function
      //so now its call back function
      .catch((error) => console.log(error));
  };

  if (!cartItems) return <p>loading...</p>;

  return (
    <div className="cart">
      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </tbody>
        </table>
        <div className="cart-summary card">
          <h2>Summary</h2>
          <div className="summary-item">
            <p>Total Products:</p>
            <p>{totalProducts()}</p>
          </div>
          <div className="summary-item">
            <p>Total Price:</p>
            <p>
              {totalPrice()}$
            </p>
          </div>
          <button
            className="checkout-button"
            onClick={handleCheckOut}
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>

      {isChecked && (
        <div>
          <div className="pop-up">
            <p>Your order has been submit</p>
            <button>Ok!</button>
          </div>
          <div class="popup-overlay"></div>
        </div>
      )}
    </div>
  );
};

export default Cart;
