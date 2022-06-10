import React, { useContext } from "react";

import video from "../../assets/video/TheMostBeautifulShotsInMovieHistory.mp4";

import "./Home.css";
import imgAnime from "../../assets/image/imgAnime.png";
import artist from "../../assets/image/artist.png";
import lionKing from "../../assets/image/lionKing.jpg";
import marvel from "../../assets/image/marvel.jpg";
import { NavLink, useSearchParams } from "react-router-dom";
import { topicsContext } from "../../Context/TopicContext";

const Home = () => {
  const { setTypeOfMovie } = useContext(topicsContext);
  return (
    <>
      <div className="container">
        <video autoPlay loop muted>
          <source width={700} src={video} type="video/mp4" />
        </video>
        {/* // cards movie */}
        <div className="cards">
          <a className="cardImage" onClick={() => setTypeOfMovie("Cult Film")}>
            <img className="image" src={artist} alt="" />
            <p className="text">Cult Movies</p>
          </a>
          {/* <NavLink className="Animeee" to={"/Anime"}> */}
          <a
            id="cardId"
            className="cardImage"
            onClick={() => setTypeOfMovie("Anime")}
          >
            <img className="image" src={imgAnime} alt="" />
            <p className="text">Anime</p>
          </a>
          {/* </NavLink> */}
          <a className="cardImage" onClick={() => setTypeOfMovie("Animation")}>
            <img className="image" src={lionKing} alt="" />
            <p className="text">Animation</p>
          </a>
          <a
            className="cardImage"
            onClick={() => setTypeOfMovie("Superhero Film")}
          >
            <img className="image" src={marvel} alt="" />
            <p className="text">Superhero</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
