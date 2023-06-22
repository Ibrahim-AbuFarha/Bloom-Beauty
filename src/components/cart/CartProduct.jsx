import React from "react";
import "./Cart.css";

export const CartProduct = ({ product }) => {
  return (
    <div className="cart-product">
      <div className="cart-product-details">
        <img src={product.image} alt={product.title} />
        <div className="product-info">
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
        </div>
      </div>
      <div className="quantity-controls">
        <button>-</button>
        <span>{product.quantity}</span>
        <button>+</button>
      </div>
    </div>
  );
};
