import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./CartProduct.css";
import CartContext from "../../store/cartContext";

export const CartProduct = ({ product }) => {
  const { addItem, decreaseItem, removeItem } = useContext(CartContext);

  return (
    <tr>
      <td>
        <div className="cart-product-details">
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h3>{product.name}</h3>
          </div>
        </div>
      </td>
      <td>${product.price}</td>
      <td>
        <div className="quantity-controls">
          <button onClick={() => decreaseItem(product)}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => addItem(product)}>+</button>

          <button className="fa-icon" onClick={() => removeItem(product)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </td>
      <td>{(product.quantity * product.price).toFixed(2)} $ </td>
    </tr>
  );
};
