import React, { useEffect, useState } from "react";
import ProductRelated from "../components/productDetails/relatedProducts/ProductRelated";
import ProductDescription from "../components/productDetails/ProductDescription";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartProvider } from "../store/cartContext";

function ProductPage() {
  const [product, setProduct] = useState({});
  //using useParams to get the id from router (:id)
  const { id } = useParams();
  //making useEffect to get a product by his id  from api
  useEffect(() => {
    axios
      .get(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
      .then(({ data }) => {
        setProduct(data); //{object}
      })
      .catch((err) => console.log(err));
  }, [id]);
  console.log(product)
  //product?.brand means if product exist give me his brand
  return (
    <CartProvider>
      <div className="container">
        <ProductDescription product={product} />
        <ProductRelated brand={product?.brand} />
      </div>
    </CartProvider>
  );
}

export default ProductPage;
