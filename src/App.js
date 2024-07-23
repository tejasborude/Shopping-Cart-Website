import React from "react";
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Products from "./Components/Products";
import Product from "./Components/Product"
import Navbar from "./Components/Navbar"
import Cart from "./Components/Cart"
import Login from "./Components/Login"
import Register from "./Components/Register"
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
// import Cheakout from "./Components/Cheakout";
// import Payment from "./Components/Payment";
// import Email from "./Components/Email";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/products/:id" element={<Product/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        {/* <Route exact path="/cheakout" element={<Cheakout/>}/> */}
        {/* <Route exact path="/payment" element={<Payment/>}/> */}
        {/* <Route exact path="/email" element={<Email/>}/> */}
      </Routes>
      <Footer/>
    </>
  );
}
