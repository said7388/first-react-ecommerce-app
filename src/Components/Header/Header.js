import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <img src={logo} alt="" className="logo"/>
      <nav className="navbar">
        <a href="/shop"> Shop </a>
        <a href="/review"> Overview </a>
        <a href="/brand"> Brand </a>
        <a href="/about"> About </a>
      </nav>
    </div>
  );
};

export default Header;
