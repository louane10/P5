import React from "react";
import "./Footer.scss";
import logo from "./LOGO FOOTER.png";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Kasa Logo" className="logo-footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
