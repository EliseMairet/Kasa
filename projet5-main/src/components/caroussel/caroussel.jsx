import React, { useState } from 'react';
import "./caroussel.scss";

const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToPreviousSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? images.length - 1 : prevSlide - 1))
  }

  const goToNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === images.length - 1 ? 0 : prevSlide + 1))
  }

  return (
    <div className='slideshow'>
      <div className='slidecontainer'>
        <div onClick={goToPreviousSlide} className='prev'>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <img src={images[currentSlide]} alt={`Diapositive ${currentSlide}`} className="image_slide" />
        <div onClick={goToNextSlide} className='next'>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div className='counter'>
        {currentSlide + 1} / {images.length}
      </div>
    </div>
  )
}

export default Slideshow;