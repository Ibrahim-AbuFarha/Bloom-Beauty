import React, { useContext } from "react";
import CartContext from "../../store/cartContext";
import { Link } from "react-router-dom";

import "../../index.css";
function NavBar() {
  return (
    <nav class="navbar navbar-edit navbar-dark bg-black  navbar-expand-lg  ">
      <div class="container nav-wrapper ">
        <button
          class="navbar-toggler text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-sharp fa-solid fa-bars" style={{ color: "#ffffff" }}></i>{" "}
        </button>
        <a class="navbar-brand logo" href="#">
          <span style={{ color: "#F5A3B7", fontFamily: "inherit" }}>Bloom</span>{" "}
          Beauty
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Shop
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 justify-content-center">
            <i class="fa-solid fa-circle-user " style={{ color: "#fff" }}></i>
            <i
              class="fa-solid cart fa-cart-shopping"
              style={{ color: "#ffffff" }}
            ></i>
            <button class="btn fw-bold bg-light text-dark" type="button">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
