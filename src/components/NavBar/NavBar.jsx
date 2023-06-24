import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../index.css";

function NavBar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("user");

    navigate("signIn");
  };

  return (
    <nav className="navbar navbar-edit navbar-dark bg-black  navbar-expand-lg  ">
      <div className="container nav-wrapper">
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-black">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/products"}>
                Shop
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 justify-content-center">
            {user && (
              <Link to={"/profile"}>
                <i
                  className="fa-solid fa-circle-user "
                  style={{ color: "#fff" }}
                ></i>
              </Link>
            )}
            {user && (
              <Link to={"/cart"}>
                <i
                  className="fa-solid cart fa-cart-shopping"
                  style={{ color: "#ffffff" }}
                ></i>
              </Link>
            )}
            {user ? (
              <button
                className="btn fw-bold bg-light text-dark "
                type="button"
                onClick={handleLogOut}
              >
                Logout
              </button>
            ) : (
              <button
                className="btn fw-bold bg-light text-dark"
                type="button"
                onClick={() => navigate("/signIn")}
              >
                Signin
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
