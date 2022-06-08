import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import search from "../../assets/logo/search.png";
import like from "../../assets/logo/like.png";
import trash from "../../assets/logo/trash.png";
import admin from "../../assets/logo/admin.png";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { topicsContext } from "../../Context/TopicContext";

const Navbar = () => {
  const { searchValue, setSearchValue, getTopics } = useContext(topicsContext);
  useEffect(() => {
    getTopics();
  }, [searchValue]);
  return (
    <nav class="navbar navbar-expand-lg  d-flex justify-content-space-between">
      <div class="container-fluid">
        <a class="navbar-brand">
          <div class="panel">
            <div class="panel-inner">
              <div class="panel-front">
                <p>M</p>
              </div>
              <div class="panel-back">
                <p>F</p>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-inner">
              <div class="panel-front">
                <p>O</p>
              </div>
              <div class="panel-back">
                <p>I</p>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-inner">
              <div class="panel-front">
                <p>O</p>
              </div>
              <div class="panel-back">
                <p>L</p>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-inner">
              <div class="panel-front">
                <p>N</p>
              </div>
              <div class="panel-back">
                <p>M</p>
              </div>
            </div>
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              {/* <a class="nav-link active" href="#"> */}
              <NavLink className="nav-link" to="/">
                <button className="shadowBtn">Home</button>
              </NavLink>
              {/* </a> */}
            </li>
            <li class="nav-item">
              {/* <a class="nav-link active" aria-current="page" href="#"> */}
              <NavLink className="nav-link" to="/MovieCard">
                <button className="shadowBtn"> Movies </button>
              </NavLink>
              {/* </a> */}
            </li>
            <li class="nav-item">
              {/* <a class="nav-link active" aria-current="page" href="#"> */}
              <NavLink className="nav-link" to="/add">
                <button className="shadowBtn">Add movie </button>
              </NavLink>
              {/* </a> */}
            </li>
          </ul>

          <div className="search-box">
            <input
              type="text"
              value={searchValue}
              placeholder="Search Here..."
              className="search-input"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <img className="searchBtn" src={search} alt="" />
            <a href="#" className="search-btn">
              <i className="fas fa-search"></i>
            </a>
          </div>
          <tr class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <img className="icon" src={like} alt="" />
            </a>
          </tr>
          <tr class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <NavLink to="/cart">
                <img className="icon" src={trash} alt="" />
              </NavLink>
            </a>
          </tr>
          <tr class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <img className="icon" src={admin} alt="" />
            </a>
          </tr>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
