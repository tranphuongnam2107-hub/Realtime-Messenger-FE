import React from "react";
import { Link } from "react-router-dom";
import "./menuNavbar.css";

import Chaticon from "../../assets/icons/chat-icon.svg";
import ChaticonHover from "../../assets/icons/chat-icon-hover.svg";
import Contacticon from "../../assets/icons/danhba.svg";
import ContacticonHover from "../../assets/icons/danhba-hover.svg";

import NavItem from "./NavItem";

const MenuNavbar = () => {
  return (
    <div className="MenuNavbar flex flex-col gap-4 h-[50%]">
      <NavItem
        defaultIcon={Chaticon}
        hoverIcon={ChaticonHover}
        alt="Chat Page"
        to="/homepage"
      />

      <NavItem
        defaultIcon={Contacticon}
        hoverIcon={ContacticonHover}
        alt="Contact Page"
        to="/contact"
      />
    </div>
  );
};

export default MenuNavbar;
