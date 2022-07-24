import React from 'react';
import { Routes,Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Cart from "./Cart/Cart.jsx";
import Login from "./Account/Login.jsx";


function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes