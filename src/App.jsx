import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import AddProduct from "./Pages/AddProduct";
import EditProduct from "./Pages/EditProduct";
import ProductList from "./Pages/ProductList";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useContext } from "react";
import { tokenAuthContext } from "./ContextAPI/TokenAuth";


function App() {
  const { isAuthorized, setIsAuthorized } = useContext(tokenAuthContext)
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productlist" element={<ProductList/>} />
        <Route path="/addproduct" element={isAuthorized?<AddProduct />:<Home/>} />
        <Route path="/editproduct" element={isAuthorized?<EditProduct />:<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* rediruct to home */}
        <Route path="/*" element={<Navigate to={'/'}/>} />
      </Routes>  
      <Footer />
    </>
  );
}

export default App;
