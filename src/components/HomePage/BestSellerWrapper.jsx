import "./stylehome.css";
import "./bestSellerWrapper.css";

import React, { useEffect, useState, useContext } from "react";
import CartContext from "../../store/cartContext";
function BestSellerWrapper() {
  const [items, setItems] = useState([]);
  const { addItem } = useContext(CartContext);
  useEffect(() => {
    fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    )
      .then((Response) => Response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <>
      <h2 className="best-seller-title why">Best Seller</h2>

      <p className="see-all-btn">
        {" "}
        Shop All{" "}
        <i class="fa-solid fa-arrow-right" style={{ color: "#383838" }}></i>
      </p>
      <div className="container best-seller-wrapper">
        <div class="row g-3">
          {items.map((item, i) => {
            if (item.rating >= 5) {
              return (
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={item.image_link} alt="" />
                  </div>
                  <div className="product-card-desc">
                    <h5 className="product-card-title">{item.name}</h5>
                    <p className="product-card-stars"></p>
                    <p className="product-card-price">{item.price}$</p>
                    <button
                      className="product-card-button"
                      onClick={() =>
                        addItem({
                          name: item.name,
                          image: item.image_link,
                          quantity: 1,
                          price: item.price,
                          id: item.id,
                        })
                      }
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default BestSellerWrapper;
