// import './App.css';

// import './App.css';
// import Footer from "./components/Footer/Footer";
// import ProfileSection from "./Pages/ProfileSection";
// import ProductsPage from "./components/ProductsPage/ProductsPage";
import HomePage from "./components/HomePage/HomePage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage"

// import SignIn from "./components/SingIp/SignIn";
// import SignUp from "./components/SignUp/SignUp";

// axios.post('localhost:3001/users',{name , password , email , })

function App() {
  return (
    <div>
      <ProductsPage />
      <HomePage />
    </div>
  );
}

export default App;
