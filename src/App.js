import "./App.css";
import Navbar from "./components/navbar/Header";
import BecomeSeller from "./components/pages/BecomeSeller";
import Cart from "./components/pages/Cart";
import CustomerCare from "./components/pages/CustomerCare";
import Download from "./components/pages/Download";
import Home from "./components/pages/Home";
import LoginSignup from "./components/pages/Login_Signup";
import Order from "./components/pages/Order";
import ProductPage from "./components/pages/ProductPage";
import ErrorPage from "./components/pages/ErrorPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/BecomeSeller" element={<BecomeSeller />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/CustomerCare" element={<CustomerCare />} />
        <Route path="/Download" element={<Download />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Login" element={<LoginSignup />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/ProductPage/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
