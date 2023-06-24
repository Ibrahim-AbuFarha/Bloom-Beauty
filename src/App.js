<<<<<<< HEAD
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
=======
import SignIn from "./components/SingIp/SignIn";
import SignUp from "./components/SignUp/SignUp";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import CartPage from "./Pages/CartPage";
import ProfileSection from "./Pages/ProfileSection";
//for footer and header for all pages (fixed ) use mainLayout
import MainLayout from "./Pages/MainLayout";
import { Routes, Route } from "react-router-dom";
>>>>>>> 5ac5f09c537da1000670cc87753d385f79c83e15

function App() {
  return (
    <div>
<<<<<<< HEAD
      <NavBar />
      <SignIn/>
      <SignUp/>
      <ProductsPage /> 
       <HomePage /> 
      
=======
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/profile" element={<ProfileSection />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Route>
      </Routes>
>>>>>>> 5ac5f09c537da1000670cc87753d385f79c83e15
    </div>
  );
}

export default App;
