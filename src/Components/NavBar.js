import React from "react";
import "./NavBar.scss";
import image from "../assets/logo.png";

const NavBar = (WrappedComponent) => {
  const logout = () => {
    sessionStorage.clear();
  };

  return (props) => (
    <>
      <header className="header-content header">
        <div className="logo-content">
          <img src={image} className="logo-content-img" alt="" />
          <div>
            <span className="add-text">Address</span>
            <br />
            <span className="add-text add-book">Book</span>
          </div>
        </div>
        <ul>
          {isShow() ? (
            <a
              href="/"
              className="logout-button"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </a>
          ) : (
            <span></span>
          )}
        </ul>
      </header>
      <div>
        <WrappedComponent {...props} />
      </div>
    </>
  );

  function isShow() {
    if (window.location.href.indexOf("dashboard") > -1) {
      console.log("true");
      return true;
    } else if (window.location.href.indexOf("details") > -1) {
      return true;
    } else {
      console.log("false");
      return false;
    }
  }
};

export default NavBar;
