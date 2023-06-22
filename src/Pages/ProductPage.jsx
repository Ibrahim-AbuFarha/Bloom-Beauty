import React from "react";
import ProductRelated from "../components/productDetails/ProductRelated";
import ProductDescription from "../components/productDetails/ProductDescription";

function ProductPage() {
  return (
    <div>
      <ProductDescription />

      <ProductRelated />
    </div>
  );
}

export default ProductPage;
