import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import TopicContextProvider from "./Context/TopicContext";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import CartContextProvider from "./Context/CartContext";
import AnimeContextProvider from "./Context/AnimeContext";

const App = () => {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <TopicContextProvider>
            <AnimeContextProvider>
              <Navbar />
              <Footer />
              <MainRoutes />
            </AnimeContextProvider>
          </TopicContextProvider>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
