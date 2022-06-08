import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { Button } from "react-bootstrap";
import googleLogo from "../../assets/logo/googleLogo.png";
import appleLogo from "../../assets/logo/appleLogo.png";
import telegram from "../../assets/logo/telegram.png";
import instagram from "../../assets/logo/instagram.png";
import twitter from "../../assets/logo/twitter.png";
import youtube from "../../assets/logo/youtube.png";

const Footer = () => {
  return (
    <div>
      {/* <!-- FOOTER START --> */}
      <footer id="footer" className="p-5  text-center text-light">
        <div className="footer__text">
          <p className="lead1 text-sm-start">
            <div className="footer-item-icon">
              <img className="logo" src={googleLogo} alt="" />
              <img className="logo" src={appleLogo} alt="" />
              <img className="logo" src={youtube} alt="" />
            </div>
          </p>
          <p id="oc">
            2022 ONLINE CINEMA
            <br />
            MOON FILM
            <br />
            Plan your end of the week with us
          </p>
          <div>
            <p class="lead ">
              <img src={telegram} alt="" />
            </p>
            <p class="lead ">
              <img src={instagram} alt="" />
            </p>
            <p class="lead ">
              <img src={twitter} alt="" />
            </p>
          </div>{" "}
        </div>
      </footer>
      {/* <!-- FOOTER FINISH --> */}
    </div>
  );
};

export default Footer;
