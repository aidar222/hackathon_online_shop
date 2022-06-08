import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { topicsContext } from "../../Context/TopicContext";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();

  const { getTopicDetails, detailsObj, deleteTopic } =
    useContext(topicsContext);

  useEffect(() => {
    getTopicDetails(id);
  }, []);

  return (
    <>
      <div className="containerMovieDetails">
        <div className="containerMovieDetailsLeft">
          <img id="imgCards" src={detailsObj.image} alt="img" />
        </div>
        <div className="containerMovieDetailsRight">
          <div className="contImg"></div>
          <h3 className="moviecDetailsH3">{detailsObj.title}</h3>
          <p className="movieDetailsPT1">{detailsObj.description}</p>
        </div>
      </div>
      <div className="movieDetailsButtons">
        <NavLink to={`/edit/${id}`}>
          <button className="btnCrud" id="edit">
            ✎
          </button>
        </NavLink>
        <NavLink to="/movieCard">
          <button className="btnCrud" id="del" onClick={() => deleteTopic(id)}>
            🗑
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default MovieDetails;
