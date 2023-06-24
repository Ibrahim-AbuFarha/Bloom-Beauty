import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../store/cartContext";

//out let is the active rout
function MainLayout() {
  return (
    <div>
      <CartProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default MainLayout;
