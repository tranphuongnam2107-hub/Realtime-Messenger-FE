import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./menuNavbar.css";

const NavItem = ({ defaultIcon, hoverIcon, alt, to }) => {
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`nav-item ${isActive ? "highlight-page" : ""}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={isHover || isActive ? hoverIcon : defaultIcon} alt={alt} />
      <span className="tooltip">{alt}</span>
    </Link>
  );
};

export default NavItem;
