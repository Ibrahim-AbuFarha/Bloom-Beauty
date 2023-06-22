import React from "react";
import "./ProductCard.css";
function ProductCard({product}) {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm81XoZa9dFFAFPY-LjxgJ-XAj-KeySicSvw&usqp=CAU"
          alt=""
        />
      </div>
      <div className="product-card-desc">
        <h5 className="product-card-title">
          All-Around Safe Block Essence Sun SPF45+
        </h5>
        <p className="product-card-stars"></p>
        <p className="product-card-subDesc">All Around safe Block Sun Milk</p>
        <p className="product-card-price">32$</p>
        <button className="product-card-button">Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
