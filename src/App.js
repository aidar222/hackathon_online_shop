import React from "react";
import { BrowserRouter } from "react-router-dom";
import TopicContextProvider from "./Context/TopicContext";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import CartContextProvider from "./Context/CartContext";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <TopicContextProvider>
            <Navbar />
            <Footer />
            <MainRoutes />
          </TopicContextProvider>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
