import React, { useState } from 'react';
import "./caroussel.scss";


const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className='slideshow'>
      <div className='slidecontainer'>
        <div onClick={goToPreviousSlide} className='prev'>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} className="image_slide" />
        <div onClick={goToNextSlide} className='next'>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;