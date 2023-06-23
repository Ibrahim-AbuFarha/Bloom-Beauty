import React, { useEffect, useState } from "react";
import ProductRelated from "../components/productDetails/relatedProducts/ProductRelated";
import ProductDescription from "../components/productDetails/ProductDescription";
import axios from "axios";

function ProductPage() {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`https://makeup-api.herokuapp.com/api/v1/products/40.json`)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(product);
  return (
    <div className="container">
      <ProductDescription product={product} />
      <ProductRelated brand="maybelline" />
    </div>
  );
}

export default ProductPage;
