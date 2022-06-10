import React from "react";
import us from "../../assets/photo/us.jpeg";
import "./Auth.css";

const Auth = () => {
  return (
    <div>
      <img id="us" src={us} />
      <h3 id="authnt">Авторизация не работает</h3>
    </div>
  );
};

export default Auth;
