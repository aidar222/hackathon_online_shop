import React from "react";
import video from "../../assets/video/TheMostBeautifulShotsInMovieHistory.mp4";
import "./Home.css";
import imgAnime from "../../assets/image/imgAnime.jpg";
import artist from "../../assets/image/artist.jpg";
import lionKing from "../../assets/image/lionKing.jpg";
import marvel from "../../assets/image/marvel.jpg";

const Home = () => {
  return (
    <>
      <div className="container">
        <video autoPlay loop muted>
          <source width={700} src={video} type="video/mp4" />
        </video>
        {/* // cards movie */}
        <div className="cards">
          <a id="cardId" className="cardImage">
            <img className="image" src={imgAnime} alt="" />
            <p className="text">Anime</p>
          </a>
          <a className="cardImage">
            <img className="image" src={artist} alt="" />
            <p className="text">Movies</p>
          </a>
          <a className="cardImage">
            <img className="image" src={lionKing} alt="" />
            <p className="text">Animation</p>
          </a>
          <a className="cardImage">
            <img className="image" src={marvel} alt="" />
            <p className="text">Fantasy</p>
          </a>
        </div>
        ;
      </div>
    </>
  );
};

export default Home;
