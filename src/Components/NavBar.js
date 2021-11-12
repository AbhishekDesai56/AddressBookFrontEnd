import React from "react";
import "./NavBar.scss";
const NavBar = (props) => {
  return (
    <header className="header-content header">
      <div className="logo-content">
        <img
          src={require("../assets/logo.png")}
          className="logo-content-img"
          alt=""
        />
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
