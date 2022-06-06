import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { Button } from "react-bootstrap";
import googleLogo from "../../assets/logo/googleLogo.png";
import appleLogo from "../../assets/logo/appleLogo.png";

const Footer = () => {
  return (
    <div>
      {/* <!-- FOOTER START --> */}
      <footer id="footer" class="p-5  text-center text-light">
        <div class="footer__text">
          <p class="lead text-sm-start">
            <tr>
              <img className="logo" src={googleLogo} alt="" />
            </tr>
            <tr>
              <img className="logo1" src={appleLogo} alt="" />
            </tr>
          </p>
          <p>
            2022 ONLINE CINEMA
            <br />
            Made by Aibat & Aidar
          </p>
          <p class="lead text-sm-end">LOS ANGELES</p>
        </div>
      </footer>
      {/* <!-- FOOTER FINISH --> */}
    </div>
  );
};

export default Footer;
