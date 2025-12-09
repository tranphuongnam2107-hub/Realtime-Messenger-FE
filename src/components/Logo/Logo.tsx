import React from "react";
import "./logo.css";
import logoImage from "../../assets/images/Creative Chatting App Logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/home" className="logo">
      <img src={logoImage} alt="Logo" />
    </Link>
  );
};

export default Logo;
