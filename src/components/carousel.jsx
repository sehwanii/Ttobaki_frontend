// carousel.jsx
import React, { useState, useEffect } from 'react';
import '../styles/carousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
      <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

const Carousel = () => {
  const images = [
    'https://via.placeholder.com/800x400?text=First+slide',
    'https://via.placeholder.com/800x400?text=Second+slide',
    'https://via.placeholder.com/800x400?text=Third+slide',
  ];

  return (
    <div className="carousel-container">
      <ImageCarousel images={images} />
    </div>
  );
};

export default Carousel;