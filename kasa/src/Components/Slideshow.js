import React, { useState } from 'react';
import './Slideshow.scss';

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <>
          <button className="slideshow-arrow left" onClick={goToPrevious}>
            &#10094;
          </button>
          <button className="slideshow-arrow right" onClick={goToNext}>
            &#10095;
          </button>
        </>
      )}
      <img src={pictures[currentIndex]} alt="logement" className="slideshow-img" />
    </div>
  );
};

export default Slideshow;
