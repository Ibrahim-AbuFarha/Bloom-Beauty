import React, { useContext } from "react";
import "./ProductDescription.css";
import CartContext from "../../store/cartContext";
import Rate from "../ProductsPage/Rate";
function ProductDescription({ product }) {
  console.log(product)
  const {addItem}=useContext(CartContext)
  return (
    <div className="product-details">
      <div className="product-img">
        <img src={product.image_link} alt="" />
      </div>
      <div className="product-desc">
        <h2 className="product-title">{product.name}</h2>
        <div className="product-stars">{<Rate/>}</div>
        <p className="product-price">{product.price}$</p>
        <p className="product-subDesc">{product.description}</p>

        <button
          className="product-button"
          onClick={() =>
            addItem({
              name: product.name,
              image: product.image_link,
              quantity: 1,
              price: product.price,
              id: product.id,
            })
          }
        >
          Add To cart
        </button>
      </div>
    </div>
  );
}

export default ProductDescription;
