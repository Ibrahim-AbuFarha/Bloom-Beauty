import React, { useEffect, useState } from "react";
import Rate from "./Rate";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function ProductCate() {
  const navigate = useNavigate();
  const [proArr, setProArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // state of the pageInation
  const [query, setQuery] = useState("");

  //Pageination :
  const changeCPage = (id) => {
    setCurrentPage(id);
  };
  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };
  //Fetch Data:
  useEffect(() => {
    fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    )
      .then((Response) => Response.json())
      .then((data) => setProArr(data));
  }, []);
  //teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest

  //teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest
  //Filter Function :
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const recordsPerPage = 24; // state for # of Cards each page
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = proArr.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(proArr.length / recordsPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  //Maping on the Array :
  // بدنا نطبع العدد يلي عملنا اله سلايس
  const AllProducts = records
    .filter((el) => {
      return el.name.toLowerCase().includes(query);
    })
    .map((item) => {
      return (
        <div key={item.id} className="product-card">
          <Link to={`/product/${item.id}`}>
            <div className="product-card-img">
              <img src={item.image_link} alt="" />
            </div>
          </Link>
          <div className="product-card-desc">
            <h5 className="product-card-title">{item.name}</h5>
            <p className="product-card-stars"></p>
            <p className="product-card-price">{item.price}$</p>
            <Rate />
            <button
              className="product-card-button"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              More Details!
            </button>
          </div>
        </div>
      );
    });

  //Return for component :
  return (
    //Filter Input :
    <section className="allCate" style={{ paddingLeft: "1em" }}>
      <input
        className="filter"
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
      <div className="grid">{AllProducts}</div>

      {/* NavBar PageInation */}
      <div className="navPageinations">
        <ul className="PageInation">
          <li className="Page-item1">
            <a className="Page-link" onClick={prevPage}>
              Prev
            </a>
          </li>

          {numbers.map((n, i) => {
            return (
              <li
                className={`Page-item1 ${currentPage === n ? "active1" : ""}`}
                key={i}
              >
                <a className="Page-link" onClick={() => changeCPage(n)}>
                  {n}
                </a>
              </li>
            );
          })}
          <li className="Page-item1">
            <a className="Page-link" onClick={nextPage}>
              Next{" "}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProductCate;
