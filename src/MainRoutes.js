import React from "react";
import { Card } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AddMovie from "./Components/Admin/AddMovie/AddMovie";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import Cart from "./Components/Cart/Cart";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import EditMovie from "./Components/Admin/EditMovie/EditMovie";
<<<<<<< HEAD
import Error from "./Components/NotWorking/Error";
import Auth from "./Components/NotWorking/Auth";
=======
import Anime from "./Components/Anime/Anime";
import Favourite from "./Components/Favourites/Favourite";
>>>>>>> 0bc892446b02fb0938564e1bec4b8d1e3090efad

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddMovie />} />
      <Route path="/MovieCard" element={<Movies />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/edit/:id" element={<EditMovie />} />
      <Route path="/details/:id" element={<MovieDetails />} />
      <Route path="/error" element={<Error />} />
      <Route path="/us" element={<Auth />} />
    </Routes>
  );
};

export default MainRoutes;
