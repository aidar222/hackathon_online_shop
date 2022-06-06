import React from "react";
import video from "../../assets/video/TheMostBeautifulShotsInMovieHistory.mp4";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <video width={1300} src={video} type="video/mp4"></video>
      </div>
    </>
  );
};

export default Home;
