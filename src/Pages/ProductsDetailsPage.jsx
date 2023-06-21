// collection of your components page
import React from "react";
import ProductDescription from "../components/productDetails/ProductDescription";
import ProductRelated from "../components/productDetails/ProductRelated";


function ProductsDetailsPage() {
  return (
    <div className="container">
      <ProductDescription />
      <ProductRelated />
      
    </div>
  );
}

export default ProductsDetailsPage;
