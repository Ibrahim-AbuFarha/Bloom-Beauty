// import './App.css';

// import './App.css';
import Footer from "./components/layout/Footer";
import Profile from "./components/profileSection/Profile";
import ProductsPage from "./Pages/ProductsPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <ProductsPage />
      <HomePage />

      <Profile />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
