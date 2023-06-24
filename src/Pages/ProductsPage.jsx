// collection of your comp
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/ProductsPage/SideBar";
import "../components/ProductsPage/Products.css";
import ProductCate from "../components/ProductsPage/ProductCate";
import Card from "../components/ProductsPage/Card";
import Rate from "../components/ProductsPage/Rate";
import { CartProvider } from "../store/cartContext";

export default function ProductsPage() {
  return (
<<<<<<< HEAD
    <>
    <ProductCate />
      {/* <Card /> */}
      {/* <SideBar /> */}
      
    </>
=======
    <CartProvider>
      <ProductCate />
    </CartProvider>
>>>>>>> b42da114c784589e3f1719e937ab856362153b14
  );
}

///////////////
