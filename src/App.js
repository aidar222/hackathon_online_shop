import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
