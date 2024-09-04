import React, { useState } from 'react';
import './Menu.scss';

const Menu = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu">
            <div className="menu-header" onClick={toggleMenu}>
                <h3>{title}</h3>
                <div className={`menu-arrow ${isOpen ? 'open' : ''}`}>
                    ➤
                </div>
            </div>
            <div className={`menu-content ${isOpen ? 'open' : ''}`}>
                {content}
            </div>
        </div>
    );
};

export default Menu;