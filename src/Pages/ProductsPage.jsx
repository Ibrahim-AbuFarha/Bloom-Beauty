// collection of your comp
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/ProductsPage/SideBar";
import "../components/ProductsPage/Products.css";
import ProductCate from "../components/ProductsPage/ProductCate";
import Rate from "../components/ProductsPage/Rate";
import { CartProvider } from "../store/cartContext";

export default function ProductsPage() {
  return (
    <CartProvider>
      <ProductCate />
    </CartProvider>
  );
}

///////////////
