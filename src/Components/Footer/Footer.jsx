import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      {/* <!-- FOOTER START --> */}
      <footer id="footer" class="p-5 bg-dark text-center text-light">
        <div class="footer__text">
          <p class="lead text-sm-start">
            <span>Copyright © 2022 BOMBA COFFEE</span>
          </p>
          <p class="lead text-sm-end">LOS ANGELES</p>
        </div>
      </footer>
      {/* <!-- FOOTER FINISH --> */}
    </div>
  );
};

export default Footer;
