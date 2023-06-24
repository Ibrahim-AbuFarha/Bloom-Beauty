import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SingIp/SignIn";
import SignUp from "./components/SignUp/SignUp";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import CartPage from "./Pages/CartPage";
import ProfileSection from "./Pages/ProfileSection";
//for footer and header for all pages (fixed ) use mainLayout
import MainLayout from "./Pages/MainLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/" element={<HomePage />} />
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
