import React from "react";
import ProductRelated from "../components/productDetails/ProductRelated";
import ProductDescription from "../components/productDetails/ProductDescription";
import ProductSlider from "../components/productDetails/ProductSlider";

function ProductPage() {
  return (
    <div>
      <ProductDescription />
      <ProductSlider />

      <ProductRelated />
    </div>
  );
}

export default ProductPage;
