import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import like from "../../assets/logo/like.png";
import trash from "../../assets/logo/trash.png";
import admin from "../../assets/logo/admin.png";

const Navbar = () => {
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
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Movies
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Add movie
              </a>
            </li>
          </ul>

          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <tr class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <img className="icon" src={like} alt="" />
            </a>
          </tr>
          <tr class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <img className="icon" src={trash} alt="" />
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
