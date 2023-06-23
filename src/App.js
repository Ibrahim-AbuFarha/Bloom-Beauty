// import './App.css';

// import './App.css';
// import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import SignIn from "./components/SingIp/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ProfileSection from "./Pages/ProfileSection";

// import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import CartPage from "./Pages/CartPage";
//for footer and header for all pages (fixed )
import MainLayout from "./Pages/MainLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/profile" element={<ProfileSection />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
