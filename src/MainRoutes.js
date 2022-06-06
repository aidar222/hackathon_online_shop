import React from "react";
import { Card } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default MainRoutes;
