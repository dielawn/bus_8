import React, { useState, useEffect } from 'react';
import './Carousel.css'; // You'll need to create this CSS file
import chevRight from 'src/assets/chevron_right.png'
import chevLeft from 'src/assets/chevron_left.png'

const PhotoCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isAutoScrolling) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoScrolling, images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoScrolling(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsAutoScrolling(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoScrolling(false);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div 
          className="carousel-slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image) => (
            <div key={image.id} className="carousel-slide">
              <div className="slide-content">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={image.isVerticle ? 'vertical-image' : 'horizontal-image'}
                />
                <div className="slide-caption">
                  {image.alt}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={goToPrevious}
          className="nav-button prev-button"
          aria-label="Previous slide"
        >
          <img src={chevLeft} alt="Previous" className="chevron-icon" />
        </button>
        <button
          onClick={goToNext}
          className="nav-button next-button"
          aria-label="Next slide"
        >
          <img src={chevRight} alt="Next" className="chevron-icon" />
        </button>

        <div className="carousel-dots">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={ `${image.isVerticle ? "verticle-image" : "horizontal-image"} dot ${index === currentIndex ? 'active' : ''}` } 
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousel;