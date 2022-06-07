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
      <footer id="footer" className="p-5  text-center text-light">
        <div className="footer__text">
          <p className="lead text-sm-start">
            <tr>
              <img className="logo" src={googleLogo} alt="" />
            </tr>
            <tr>
              <img className="logo1" src={appleLogo} alt="" />
            </tr>
          </p>
          <p id="oc">
            2022 ONLINE CINEMA
            <br />
            MOON FILM
            <br />
            Plan your end of the week with us
          </p>
          <p class="lead text-sm-end">Aibat & Aidar</p>
        </div>
      </footer>
      {/* <!-- FOOTER FINISH --> */}
    </div>
  );
};

export default Footer;
