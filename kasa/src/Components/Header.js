import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="logo">Kasa</div>
            <nav>
                <a href="#">Accueil</a>
                <a href="#">A Propos</a>
            </nav>
        </header>
    );
};

export default Header;