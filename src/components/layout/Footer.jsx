import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function App() {
  return (
    <MDBFooter
      // bgColor="black"
      className="text-center text-lg-start text-muted"
      style={{ backgroundColor: "black" }}
    >
      <section
        className="d-flex justify-content-center p-4 border-bottom"
        style={{ color: "white" }}
      >
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks</span>
        </div>

        <div></div>
      </section>

      <section className="" style={{ color: "white" }}>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Bloom Beauty
              </h6>
              <p>
                A place that houses all things hair, makeup, skin and nails,
                plus knowledgeable associates to guide you along your beauty
                journey. .
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Makeup
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Foundations
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Concealer
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Skincare
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Amman, Jordan
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                BloomBeauty@Gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "black", color: "white" }}
      >
        © 2023 Copyright: Bloom Beauty
      </div>
    </MDBFooter>
  );
}
