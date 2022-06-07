import React from "react";
import { BrowserRouter } from "react-router-dom";
import TopicContextProvider from "./Context/TopicContext";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <TopicContextProvider>
          <Navbar />
          <Footer />
          <MainRoutes />
        </TopicContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
