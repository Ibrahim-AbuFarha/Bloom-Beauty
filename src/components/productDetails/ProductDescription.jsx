import React from "react";
import "./ProductDescription.css";
function ProductDescription({ product }) {
  return (
    <div className="product-details">
      <div className="product-img">
        <img src={product.image_link} alt="" />
      </div>
      <div className="product-desc">
        <h2 className="product-title">{product.name}</h2>
        <div className="product-stars">Stars</div>
        <p className="product-price">{product.price}$</p>
        <p className="product-subDesc">{product.description}</p>

        <button className="product-button">Add To cart</button>
      </div>
    </div>
  );
}

export default ProductDescription;
