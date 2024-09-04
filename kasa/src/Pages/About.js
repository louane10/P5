import React from 'react';
import Menu from '../Components/Menu';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './About.scss';

const About = () => {
    return (
        <div className='body'>
            <Header />
            <div>
                <section className='bannière' />
                <Menu
                    title="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                <Menu
                    title="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Menu
                    title="Service"
                    content="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
                />
                <Menu
                    title="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services."
                />
            </div>
            <Footer />
        </div>
    );
};

export default About;