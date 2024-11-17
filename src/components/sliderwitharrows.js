import React, { useState } from "react";
import "styles/SliderWithArrows.css"; 
import img1 from "images/1.jpg"; // Import local images
import img2 from "images/2.jpg";
import img3 from "images/3.jpg";

const SliderWithArrows = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use local images here
  const images = [img1, img2, img3];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <button className="arrow left-arrow" onClick={goToPrevious}>
          &#8592;
        </button>
        <div className="slider-image-container">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slider-image"
          />
        </div>
        <button className="arrow right-arrow" onClick={goToNext}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default SliderWithArrows;