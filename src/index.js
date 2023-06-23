import React from "react";
import ReactDOM from "react-dom/client";
import "./components/profileSection/profile.css";
import { CartProvider } from "./store/cartContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
