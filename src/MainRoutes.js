import React from "react";
import { Card } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AddMovie from "./Components/Admin/AddMovie/AddMovie";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import Cart from "./Components/Cart/Cart";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import EditMovie from "./Components/Admin/EditMovie/EditMovie";
import Error from "./Components/NotWorking/Error";
import Auth from "./Components/NotWorking/Auth";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddMovie />} />
      <Route path="/MovieCard" element={<Movies />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/edit/:id" element={<EditMovie />} />
      <Route path="/details/:id" element={<MovieDetails />} />
      <Route path="/error" element={<Error />} />
      <Route path="/us" element={<Auth />} />
    </Routes>
  );
};

export default MainRoutes;
