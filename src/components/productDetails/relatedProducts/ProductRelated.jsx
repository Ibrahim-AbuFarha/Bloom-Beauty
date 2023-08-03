import React, { useEffect, useState } from "react";
import ProductSlider from "./ProductSlider";
import "./ProductRelated.css";
import axios from "axios";
function ProductRelated({ brand }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
      )
      .then(({ data }) => {
        setProducts(data.slice(0, 17));
      })
      .catch((err) => console.log(err));
  }, [brand]);

  return (
    <div className="product-related">
      <h3>You May Also Like</h3>
      <ProductSlider products={products} />
    </div>
  );
}

export default ProductRelated;
