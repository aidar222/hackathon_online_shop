import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Footer />
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
