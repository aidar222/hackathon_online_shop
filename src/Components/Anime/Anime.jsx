import React, { useContext, useEffect } from "react";
import { TopicContext } from "../../Context/TopicContext";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Anime.css";
import arrowRight from "../../assets/logo/arrow.png";
import arrowLeft from "../../assets/logo/arrow1.png";
import { animeContext } from "../../Context/AnimeContext";

const Anime = () => {
  const { animeArr, getAnime, prevPage, nextPage } = useContext(animeContext);

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <>
      <div className="container-cards">
        {animeArr.map((item) => (
          <div key={item.id}>
            <Card className="movieCards">
              <NavLink to={`/details/${item.id}`}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.typeOfMovieAnime}
                />
              </NavLink>
            </Card>
          </div>
        ))}
      </div>
      <div className="btn-container">
        <button className="topicListBtn" onClick={() => prevPage()}>
          <img src={arrowLeft} alt={arrowLeft} />
        </button>
        <button className="topicListBtn" onClick={() => nextPage()}>
          <img src={arrowRight} alt={arrowRight} />
        </button>
      </div>
    </>
  );
};

export default Anime;
