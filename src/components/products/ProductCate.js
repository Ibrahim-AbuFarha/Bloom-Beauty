import React, { useEffect, useState } from "react";
// import CardPro from "./CardPro";

function ProductCate() {
  const [proArr, setProArr] = useState([]);
  useEffect(() => {
    fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    )
      .then((Response) => Response.json())
      .then((data) => setProArr(data));
  }, []);
  console.log(proArr);

  const AllProducts = proArr.map((item) => {
    return (
      <div className="col-sm-3" key={item.id}>
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
          >
            <img
              src={item.image_link}
              className="img-fluid"
              alt="This is alt pic"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ background: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text" style={{ fontSize: "0.9em" }}>
              {item.description}
            </p>
            <p>{item.price}js</p>
            <a href="#!" className="btn btn-primary">
              Button
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      {proArr.map((el) => {
        return (
          <div key={el.id} style={{ flexWrap: "wrap" }} className="row">
            {AllProducts}
          </div>
        );
      })}
    </div>
  );
}

export default ProductCate;
