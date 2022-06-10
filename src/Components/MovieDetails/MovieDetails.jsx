import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { topicsContext } from "../../Context/TopicContext";
import love from "../../assets/logo/love.png";
import trash from "../../assets/logo/trash.png";
import "./MovieDetails.css";
import { cartContext } from "../../Context/CartContext";
import { favouriteContext } from "../../Context/FavouriteContext";
import { Button } from "@mui/material";

const MovieDetails = () => {
  const { id } = useParams();

  const { getTopicDetails, detailsObj, deleteTopic } =
    useContext(topicsContext);

  const { addProductToCart } = useContext(cartContext, favouriteContext);

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
                <img src="https://img.icons8.com/avantgarde/100/undefined/experimental-edit-avantgarde.png" />
              </button>
            </NavLink>
            <NavLink to="/movieCard">
              <button
                className="btnCrud"
                id="del"
                onClick={() => deleteTopic(id)}
              >
                <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/undefined/external-trash-interface-kiranshastry-lineal-color-kiranshastry.png" />
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
      <div className="btnFav">
        <NavLink to="/error">
          <button id="heart">
            <img className="icon" src={love} alt="" />
          </button>
        </NavLink>
      </div>
      <div className="btnCart">
        <NavLink to="/cart">
          <button id="heart" onClick={(e) => addProductToCart(detailsObj)}>
            <img className="icon" src={trash} alt="" />
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default MovieDetails;
