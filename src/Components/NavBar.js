import React from "react";
import "./NavBar.scss";
import image from "../assets/logo.png";
const NavBar = (props) => {
  return (
    <header className="header-content header">
      <div className="logo-content">
        <img src={image} className="logo-content-img" alt="" />
        <div>
          <span className="add-text">Address</span>
          <br />
          <span className="add-text add-book">Book</span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
