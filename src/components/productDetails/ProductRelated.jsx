import React from "react";
import ProductSlider from "./ProductSlider";
import './ProductRelated.css'
function ProductRelated() {
  return (
    <div className="product-related">
      <h3>You May Also Like</h3>
      <ProductSlider />
    </div>
  );
}

export default ProductRelated;
