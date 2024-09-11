import React from "react";
import Card from "./Card";
import logements from "../logements.json";
import "./CardList.scss";

const CardList = () => {
  return (
    <div className="backgroundcard">
      <div className="card-list">
        {}
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
