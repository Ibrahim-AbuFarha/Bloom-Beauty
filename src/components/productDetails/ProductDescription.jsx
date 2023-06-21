import React from "react";
import "./ProductDescription.css";
function ProductDescription() {
  return (
    <div className="product-details">
      <div className="product-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJ2n4jkyF73GhaScsOSlia-oYARZHVGzpZg&usqp=CAU"
          alt=""
        />
      </div>
      <div className="product-desc">
        <h2 className="product-title">DASH GLOW</h2>
        <div className="product-stars">Stars</div>
        <p className="product-price">$28</p>
        <p className="product-subDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugit
          officia numquam quibusdam dolorum. Consequatur culpa nisi vitae nam
          tenetur ratione, eum quod ut illo!
        </p>

        <h6>Tags</h6>
        <div className="product-tags">
          <span>#hoo</span>
          <span>#hee</span>
          <span>#haa</span>
        </div>
        <button className="product-button">Add To cart</button>
      </div>
    </div>
  );
}

export default ProductDescription;
