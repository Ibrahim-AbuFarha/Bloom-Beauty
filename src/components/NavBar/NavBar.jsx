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
    <nav class="navbar navbar-edit navbar-dark bg-dark  navbar-expand-lg ">
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
          Bloom Beauty
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/products"}>
                Shop
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 justify-content-center">
            {user && (
              <Link to={"/profile"}>
                <i
                  class="fa-solid fa-circle-user "
                  style={{ color: "#fff" }}
                ></i>
              </Link>
            )}
            {user && (
              <Link to={"/cart"}>
                <i
                  class="fa-solid cart fa-cart-shopping"
                  style={{ color: "#ffffff" }}
                ></i>
              </Link>
            )}
            {user ? (
              <button
                class="btn fw-bold bg-light text-dark"
                type="button"
                onClick={handleLogOut}
              >
                Logout
              </button>
            ) : (
              <button
                class="btn fw-bold bg-light text-dark"
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
