import React from "react";
import human from "../../assets/photo/human.gif";
import "./Error.css";

const Error = () => {
  return (
    <div>
      <div className="human">
        <img className="human-img" src={human} />
        <h3 id="Dnw">Does not working</h3>
      </div>
    </div>
  );
};

export default Error;
