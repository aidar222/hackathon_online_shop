import React from "react";
import video from "../../assets/video/TheMostBeautifulShotsInMovieHistory.mp4";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <video autoPlay loop muted>
          <source width={700} src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Home;
