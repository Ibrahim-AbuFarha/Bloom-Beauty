import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import SignUp from "./components/SignUp/SignUp";
import Cart from "./components/cart/Cart";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ProfileSection from "./Pages/ProfileSection";
import ProductsPage from "./Pages/ProductsPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SingIp/SignIn";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

// axios.post('localhost:3001/users',{name , password , email , })

function App() {
  return (
    <div>
      <NavBar />
      <SignIn/>
      <SignUp/>
      <ProductsPage /> 
       <HomePage /> 
      
    </div>
  );
}

export default App;
