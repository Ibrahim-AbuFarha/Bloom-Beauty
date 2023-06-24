import React, { useContext } from "react";
import CartContext from "../../store/cartContext";
import { Link } from "react-router-dom";
function NavBar() {
  const { totalProducts, deleteAllItems } = useContext(CartContext);
  let isUser = true;
  const handleLogOut = () => {
    localStorage.removeItem("user");
    // deleteAllItems();
    isUser = false;
  };
  return (
    <nav class="navbar  navbar-dark bg-dark  navbar-expand-lg ">
      <div class="container ">
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
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div className="d-flex align-items-center">
            {/* <!-- Icon --> */}
            <Link className="text-reset me-3" to={"/cart"}>
              <i className="fas fa-shopping-cart"></i>
              <span className="badge rounded-pill badge-notification bg-danger">
                {isUser && totalProducts()}
              </span>
            </Link>

            {/* <!-- Notifications --> */}
            <div className="dropdown">
              <a
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="/#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- Avatar --> */}
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="/#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <Link to={"/profile"}>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </Link>
                <Link to={"/signIn"}>
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{ marginLeft: "10px" }}
                    onClick={handleLogOut}
                  >
                    LogOut
                  </button>
                </Link>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="/#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </div>
    </nav>
  );
}

export default NavBar;
