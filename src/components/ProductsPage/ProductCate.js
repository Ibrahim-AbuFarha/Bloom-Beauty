import React, { useEffect, useState } from "react";
// import CardPro from "./CardPro";
import Rate from "./Rate"

function ProductCate() {
  const [proArr, setProArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // state of the pageInation
  const [query , setQuery] = useState("")


  


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



  //Filter Function :
  const handleChange = (e) => {
    setQuery(e.target.value) 
  }

  const recordsPerPage = 24; // state for # of Cards each page
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = proArr.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(proArr.length / recordsPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  //Maping on the Array :
  // بدنا نطبع العدد يلي عملنا اله سلايس 
  const AllProducts = records.filter((el) => {return (el.name.toLowerCase().includes(query))}).map((item) => {
    return (
      <div key={item.id} className="product-card">
        <div className="product-card-img">
          <img src={item.image_link} alt="" />
        </div>
        <div className="product-card-desc">
          <h5 className="product-card-title">{item.name}</h5>
          <p className="product-card-stars"></p>
          <p className="product-card-price">{item.price}$</p>
          <Rate/> 
          <button className="product-card-button">Add To Cart</button>
        </div>
      </div>
    );
  });

  //Return for component :
  return (
    //Filter Input :
    <section className="allCate" style={{ paddingLeft: "1em" }}>
      <input   className="filter" type="text" placeholder="Search..."  onChange={handleChange}/>
      <div className="grid">{AllProducts}</div>
      
      {/* NavBar PageInation */}
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
    </section>
  );
}

export default ProductCate;

/* 
<div className="product-card">
      <div className="product-card-img">
        <img src={product.image_link} alt="" />
      </div>
      <div className="product-card-desc">
        <h5 className="product-card-title">{product.name}</h5>
        <p className="product-card-stars"></p>
        <p className="product-card-price">{product.price}$</p>
        <button
          className="product-card-button"
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
          Add To Cart
        </button>
      </div>
    </div>
*/

