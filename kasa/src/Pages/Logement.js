import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logements from "../logements.json";
import { Link } from "react-router-dom";
import "./Logement.scss";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";
import Slideshow from "../Components/Slideshow";

const Logement = () => {
  const { id } = useParams(); 
  const [logement, setLogement] = useState(null); 

  useEffect(() => {
    const selectedLogement = logements.find((item) => item.id === id);
    setLogement(selectedLogement);
  }, [id]);

  if (!logement) return <div>Loading...</div>; 

  return (
    <div>
    <div className="logement-page">
      <Header />
      <div className="logement-container">
        <Slideshow pictures={logement.pictures} />

        <div className="logement-info">
          <div className="gauche">
            <div className="logement-titre">
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
            </div>

            <div className="tags">
              {logement.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="host-rating">
            <div className="host">
              <span>
                {logement.host.name.split(" ")[0]}
                <br />
                {logement.host.name?.split(" ")[1]}
              </span>
              <img
                src={logement.host.picture}
                alt={logement.host.name}
                className="host-picture"
              />
            </div>

            <div className="rating">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < logement.rating ? "filled-star" : "empty-star"
                    }
                  >
                    ★
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div className="dropdowns">
          <Menu title="Description" content={logement.description} />
          <Menu
            title="Équipements"
            content={
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>

      
    </div>
    <Footer />
    </div>
  );
};

export default Logement;
