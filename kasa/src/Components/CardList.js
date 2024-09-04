import React from 'react';
import Card from './Card';
import './CardList.scss';

const CardList = () => {
  return (
    <div className='backgroundcard'>
    <div className="card-list">
      {Array(6).fill(0).map((_, index) => (
        <Card key={index} title={`Titre de la location`} />
      ))}
    </div>
    </div>
  );
};

export default CardList;
