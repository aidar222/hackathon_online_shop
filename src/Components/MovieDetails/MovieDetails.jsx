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
          <h2 className="moviecDetailsH3">
            {detailsObj.title}
            <NavLink to={`/edit/${id}`}>
              <button className="btnCrud" id="edit">
                ✎
              </button>
            </NavLink>
            <NavLink to="/movieCard">
              <button
                className="btnCrud"
                id="del"
                onClick={() => deleteTopic(id)}
              >
                🗑
              </button>
            </NavLink>
          </h2>
          <div className="contImg"></div>
          <div className="movieDetailsButtons"></div>
          <div className="stars">
            <img src="https://img.icons8.com/external-filled-outline-perfect-kalash/64/undefined/external-Star-basic-filled-outline-perfect-kalash.png" />
            <img src="https://img.icons8.com/external-filled-outline-perfect-kalash/64/undefined/external-Star-basic-filled-outline-perfect-kalash.png" />
            <img src="https://img.icons8.com/external-filled-outline-perfect-kalash/64/undefined/external-Star-basic-filled-outline-perfect-kalash.png" />
            <img src="https://img.icons8.com/external-filled-outline-perfect-kalash/64/undefined/external-Star-basic-filled-outline-perfect-kalash.png" />
            <img src="https://img.icons8.com/external-filled-outline-perfect-kalash/64/undefined/external-Star-basic-filled-outline-perfect-kalash.png" />
          </div>
          <h5>Overview</h5>
          <p className="movieDetailsPT1">{detailsObj.description}</p>
          <div className="">
            <h5>Cast and crew</h5>
            <img id="cast" src={detailsObj.cast} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
