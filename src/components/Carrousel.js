import React, { useState } from 'react';

const Carousel = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCount, setCurrentCount] = useState(1);

  const previousSlide = () => {
    const newIndex = currentSlide === 0 ? pictures.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
    const newCount = currentCount === 1 ? pictures.length : currentCount - 1;
    setCurrentCount(newCount);
  };

  const nextSlide = () => {
    const newIndex = currentSlide === pictures.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
    const newCount = currentCount === pictures.length ? 1 : currentCount + 1;
    setCurrentCount(newCount);
  };

  return (
    <div className="carousel">
      <img src={pictures[currentSlide]} alt="carousel slide" />
      <span className="prev" onClick={previousSlide}>&#10094;</span>
      <span className="next" onClick={nextSlide}>&#10095;</span>
      <div className="counter">{currentCount} / {pictures.length}</div>
    </div>
  );
};

export default Carousel;
