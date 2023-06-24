import React, { useContext } from "react";
import "./ProductCard.css";
import CartContext from "../../../store/cartContext";
import { Link, NavLink } from "react-router-dom";
function ProductCard({ product }) {
  const { addItem } = useContext(CartContext);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="product-card-img">
          <img src={product.image_link} alt="" />
        </div>
      </Link>

      <div className="product-card-desc">
        <h5 className="product-card-title">{product.name}</h5>
        <p className="product-card-stars"></p>
        <p className="product-card-price">{product.price}$</p>
        <button
          className="product-card-button"
          onClick={() =>
            addItem({
              name: product.name,
              image: product.image_link,
              quantity: 1,
              price: product.price,
              id: product.id,
            })
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
