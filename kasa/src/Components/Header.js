import React from "react";
import "./Header.scss";
import logo from "./LOGO.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Kasa logo" className="logo-header" />
      </Link>
      <nav>
        <a href="/">ACCUEIL</a>
        <a href="/about">A PROPOS</a>
      </nav>
    </header>
  );
};

export default Header;
