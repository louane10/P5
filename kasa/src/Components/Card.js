import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`} className="card-link">
      <div className="card">
        {/* Titre de la card */}
        <h2>{title}</h2>
        {/* Image de couverture du logement */}
        <img src={cover} alt={title} />

        {/* Lien vers la page de détail */}
        <Link to={`/logement/${id}`}>Voir plus</Link>
      </div>
    </Link>
  );
};

export default Card;
