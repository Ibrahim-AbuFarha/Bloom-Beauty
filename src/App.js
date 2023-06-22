// import './App.css';

// import './App.css';
import Footer from "./components/Footer/Footer";
import ProfileSection from "./components/profileSection/ProfileSection";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./components/SingIp/SignIn";
import SignUp from "./components/SignUp/SignUp";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route index element={<HomePage />} />
        <Route path="product" element={<ProductsPage />} />
        <Route path="profile" element={<ProfileSection />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
