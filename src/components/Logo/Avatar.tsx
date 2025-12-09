import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import AvatarSample from "../../assets/images/avatar-sample.jpg";
import "./logo.css";
import ProfileIcon from "../../assets/icons/profile.svg";
import SettingIcon from "../../assets/icons/setting.svg";
import LogoutIcon from "../../assets/icons/logout.svg";

const Avatar = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="avatar-wrapper"
      style={{ position: "relative", display: "inline-block" }}
    >
      <Link
        to="#"
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
      >
        <img src={AvatarSample} alt="Logo" className="avatar-img" />
      </Link>

      {open && (
        <div className="avatar-tooltip flex flex-col">
          <Link to="#">
            <img src={ProfileIcon} alt="Profile" />
            Profile
          </Link>

          <Link to="#">
            <img src={SettingIcon} alt="Setting" />
            Settings
          </Link>

          <Link to="#" className="text-[#eb2f06]">
            <img src={LogoutIcon} alt="Logout" />
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Avatar;
