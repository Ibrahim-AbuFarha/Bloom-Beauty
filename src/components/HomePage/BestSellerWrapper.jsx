import "./stylehome.css";
export default function BestSellerWrapper() {
  return (
    <>
      {/* <!-- Product Card --> */}

      <div className="container py-5">
        <h2 className="besSeller-title">Best Sellers</h2>
        <div className="row">
          <div className="col-lg-3">
            <div className="product_card">
              <div className="card border-0">
                <div className="card-header bg-transparent border-0 p-0">
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEf-Y8UpRwi8NwgubSX8FuEsvHdurx_bL9Jw&usqp=CAU"
                    alt=""
                  />
                  <div className="card-overlay">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" className="btn btn-secondary">
                        <i className="far fa-heart"></i>
                      </button>
                      <button type="button" className="btn btn-light">
                        <i className="fas fa-shopping-cart"></i> Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="details-btn">
                    <a href="#" className="btn btn-dark">
                      View Details{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <small>
                    <a href="#" className="text-muted">
                      Foundation
                    </a>
                  </small>
                  <strong>
                    <a href="#" className="text-body">
                      Studio Fix Fluid SPF 15
                    </a>
                  </strong>
                  <div className="price">
                    <span className="text-decoration-line-through">৳ 870</span>
                    <span className="text-warning"> ৳ 783</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
//   MDBRipple,
// } from "mdb-react-ui-kit";
// export default function BestSellerWrapper() {
//   return (
//     <MDBCard>
//       <MDBRipple
//         rippleColor="light"
//         rippleTag="div"
//         className Name="bg-image hover-overlay"
//       >
//         <MDBCardImage
//           src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
//           fluid
//           alt="..."
//         />
//         <a>
//           <div
//             className Name="mask"
//             style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//           ></div>
//         </a>
//       </MDBRipple>
//       <MDBCardBody>
//         <MDBCardTitle>Card title</MDBCardTitle>
//         <MDBCardText>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </MDBCardText>
//         <MDBBtn href="#">Button</MDBBtn>
//       </MDBCardBody>
//     </MDBCard>
//   );
// }
//
// import React from "react";
// import {
//   MDBCard,
//   MDBCardImage,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardGroup,
// } from "mdb-react-ui-kit";

// export default function BestSellerWrapper() {
//   return (
//     <MDBCardGroup>
//       <MDBCard>
//         <MDBCardImage
//           src="https://mdbootstrap.com/img/new/standard/city/041.webp"
//           alt="..."
//           position="top"
//         />
//         <MDBCardBody>
//           <MDBCardTitle>Card title</MDBCardTitle>
//           <MDBCardText>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This content is a little bit longer.
//           </MDBCardText>
//           <MDBCardText>
//             <small className Name="text-muted">Last updated 3 mins ago</small>
//           </MDBCardText>
//         </MDBCardBody>
//       </MDBCard>

//       <MDBCard>
//         <MDBCardImage
//           src="https://mdbootstrap.com/img/new/standard/city/042.webp"
//           alt="..."
//           position="top"
//         />
//         <MDBCardBody>
//           <MDBCardTitle>Card title</MDBCardTitle>
//           <MDBCardText>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content.
//           </MDBCardText>
//           <MDBCardText>
//             <small className Name="text-muted">Last updated 3 mins ago</small>
//           </MDBCardText>
//         </MDBCardBody>
//       </MDBCard>

//       <MDBCard>
//         <MDBCardImage
//           src="https://mdbootstrap.com/img/new/standard/city/043.webp"
//           alt="..."
//           position="top"
//         />
//         <MDBCardBody>
//           <MDBCardTitle>Card title</MDBCardTitle>
//           <MDBCardText>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This card has even longer content than the
//             first to show that equal height action.
//           </MDBCardText>
//           <MDBCardText>
//             <small className Name="text-muted">Last updated 3 mins ago</small>
//           </MDBCardText>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBCardGroup>
//   );
// }
