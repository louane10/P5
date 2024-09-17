import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";
import Footer from "./Footer";
import Header from "./Header";

function NotFound() {
  return (
    <div>
    <div className="container">
      <Header />
      <h1 className="errorCode">404</h1>
      <p className="message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="link">
        Retourner sur la page d'accueil
      </Link>
      
    </div>
    <Footer />
    </div>
  );
}

export default NotFound;
