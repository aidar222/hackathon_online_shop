import React from "react";
import video from "../../assets/video/TheMostBeautifulShotsInMovieHistory.mp4";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <video autoPlay width={1200} src={video}></video>
      </div>
    </>
  );
};

export default Home;
