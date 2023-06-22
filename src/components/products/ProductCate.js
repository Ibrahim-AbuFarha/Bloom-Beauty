import React, { useEffect, useState } from "react";
// import CardPro from "./CardPro";

function ProductCate() {
  const [proArr, setProArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // state of the page

  //Pageination :
  const changeCPage = (id) => {};
  const prevPage = () => {};

  const nextPage = () => {};
  //Fetch Data:
  useEffect(() => {
    fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    )
      .then((Response) => Response.json())
      .then((data) => setProArr(data));
  }, []);

  const recordsPerPage = 12; // state for # of Cards each page
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = proArr.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(proArr.length / recordsPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  const AllProducts = records.map((item) => {
    // بدنا نطبع العدد يلي عملنا اله سلايس
    return (
      // BootStrap Component:
      <div className="col-sm-3" key={item.id}>
        <div
          style={{
            marginBottom: "1em",
            minHeight: "50vh",
            display: "flex",
            justifyContent: "space-between",
          }}
          className="card"
        >
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
              style={{ width: "150px" }}
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
            <p>{item.price} Jd</p>
            <a href="#!" className="btn btn-primary">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="allCate" style={{ paddingLeft: "1em" }}>
      <div style={{ flexWrap: "wrap" }} className="row">
        {AllProducts}
      </div>
      <nav className="navPageinations">
        <ul className="PageInation">
          <li className="Page-item">
            <a href="/#" className="Page-link" onClick={prevPage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => {
            return (
              <li
                className={`Page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  href="/#"
                  className="Page-link"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            );
          })}
          <li className="Page-item">
            <a href="/#" className="Page-link" onClick={nextPage}>
              Next{" "}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProductCate;
