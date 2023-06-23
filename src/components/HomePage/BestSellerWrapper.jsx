import "./stylehome.css";
import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

// export default function BestSellerWrapper() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch(
//       "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
//     )
//       .then((Response) => Response.json())
//       .then((data) => {
//         setItems(data);
//         console.log(data);
//       });

//     // console.log(Response);
//   }, []);
//   return (
//     <section>
//       {items.map((item) => {
//         <h1>hi</h1>;
//         // <MDBCard
//         //   style={{
//         //     marginBottom: "1em",
//         //     minHeight: "50vh",
//         //     display: "flex",
//         //     justifyContent: "space-between",
//         //   }}
//         //   className="card"
//         // >
//         //   <MDBCardImage
//         //     src={item.image_link}
//         //     position="top"
//         //     alt="..."
//         //     className="allCate"
//         //     style={{ width: "150px" }}
//         //   />
//         //   <MDBCardBody>
//         //     <MDBCardTitle>{item.name}</MDBCardTitle>
//         //     <MDBCardText>{item.price} Jd</MDBCardText>
//         //     <MDBBtn href="#"> Add to cart</MDBBtn>
//         //   </MDBCardBody>
//         // </MDBCard>;
//       })}
//     </section>
//   );
// }
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";

function BestSellerWrapper() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    )
      .then((Response) => Response.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      });
    // let arr = [];

    // console.log(Response);
  }, []);
  return (
    <>
      <h2 className="best-seller-title">Best Seller</h2>

      <p className="see-all-btn"> See All</p>
      <div className="container best-seller-wrapper">
        <div class="row g-3">
          {items.map((item, i) => {
            if (i < 4) {
              console.log(item);
              return (
                <div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch ">
                  <div className="card best-seller-card">
                    <img
                      src={item.image_link}
                      className="card-img-top"
                      alt="A Street in Europe"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}e</h5>
                      <p className="card-text">{item.price} Jd</p>
                      <a
                        href="#"
                        className="btn btn-primary mt-auto align-self-start best-seller-btn shadow-none"
                      >
                        Add to cart
                      </a>
                    </div>
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
