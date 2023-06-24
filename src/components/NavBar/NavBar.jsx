import React, { useContext } from "react";
import CartContext from "../../store/cartContext";
import { Link } from "react-router-dom";

import "../../index.css";
function NavBar() {
  return (
    <nav className="navbar navbar-edit navbar-dark bg-black  navbar-expand-lg  ">
      <div className="container nav-wrapper ">
        <button
          className="navbar-toggler text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i
            className="fa-sharp fa-solid fa-bars"
            style={{ color: "#ffffff" }}
          ></i>{" "}
        </button>
        <a className="navbar-brand logo" href="#">
          <span style={{ color: "#F5A3B7", fontFamily: "inherit" }}>Bloom</span>{" "}
          Beauty
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 justify-content-center">
            <i
              className="fa-solid fa-circle-user "
              style={{ color: "#fff" }}
            ></i>
            <i
              className="fa-solid cart fa-cart-shopping"
              style={{ color: "#ffffff" }}
            ></i>
            <button className="btn fw-bold bg-light text-dark" type="button">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
