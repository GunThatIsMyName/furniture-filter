import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import SingleProject from "./pages/singleProduct";
import Cart from "./pages/cart";
import Navbar from "./components/global/navbar";
import Sidebar from "./components/global/sidebar";
import ProductPage from "./pages/products";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/:id" element={<SingleProject />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
