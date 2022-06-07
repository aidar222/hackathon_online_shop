import React from "react";
import { Card } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AddMovie from "./Components/Admin/AddMovie/AddMovie";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import Cart from "./Components/Cart/Cart";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddMovie />} />
      <Route path="/MovieCard" element={<Movies />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default MainRoutes;
