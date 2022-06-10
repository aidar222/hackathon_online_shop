import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import TopicContextProvider from "./Context/TopicContext";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import CartContextProvider from "./Context/CartContext";
import FavouriteContextProvider from "./Context/FavouriteContext";

const App = () => {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <FavouriteContextProvider>
            <TopicContextProvider>
              <Navbar />
              <Footer />
              <MainRoutes />
            </TopicContextProvider>
          </FavouriteContextProvider>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
