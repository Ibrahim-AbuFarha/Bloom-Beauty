import React from "react";
import ReactDOM from "react-dom/client";
import "./components/profileSection/profile.css";
import { CartProvider } from "./store/cartContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
