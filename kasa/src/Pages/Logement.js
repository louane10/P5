import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../logements.json';  
import { Link } from 'react-router-dom';
import "./Logement.scss"; 
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Logement = () => {
    const { id } = useParams(); // Récupère l'ID de l'URL
    const [logement, setLogement] = useState(null); // Stocke les données du logement
  
    useEffect(() => {
      const selectedLogement = logements.find(item => item.id === id);
      setLogement(selectedLogement);
    }, [id]);
  
    if (!logement) return <div>Loading...</div>; // Affiche un message pendant le chargement des données
  
    return (
      <div className="logement-page">
        <Header />
  
        <div className="logement-container">
          <img src={logement.cover} alt={logement.title} className="logement-cover" />
  
          <div className="logement-info">
            <div className='logement-titre'>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            </div>
  
            <div className="host-rating">
              <div className="host">
                <span>{logement.host.name}</span>
                <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
              </div>
  
              <div className="rating">
                {Array(5).fill(0).map((_, index) => (
                  <span key={index} className={index < logement.rating ? 'filled-star' : 'empty-star'}>★</span>
                ))}
              </div>
            </div>
  
            <div className="tags">
              {logement.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
  
            <div className="dropdowns">
              <details>
                <summary>Description</summary>
                <p>{logement.description}</p>
              </details>
  
              <details>
                <summary>Équipements</summary>
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </details>
            </div>
          </div>
        </div>
  
        <Footer />
      </div>
    );
  };
  

export default Logement;
