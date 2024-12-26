import React, { useState } from 'react';
import './Imageslider.css';  // Import the CSS file
import banner1 from '.././../../assets/banner-1.jpg'
import banner2 from '.././../../assets/banner-2.jpg'
import banner3 from '.././../../assets/banner-3.jpg'

const Imageslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const images = [
    { src: banner1, type: 'Environmental Responsibility' },
    { src: banner3, type: 'Social Impact' },
    { src: banner2, type: 'Governance & Compliance' },
  ];

  // Move current image to the front of the thumbnail list
  const reorderedImages = [
    images[currentIndex], 
    ...images.slice(0, currentIndex), 
    ...images.slice(currentIndex + 1)
  ];

  // Next button click handler
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setAnimationClass('next');
    setCurrentIndex(nextIndex);
  };

  // Prev button click handler
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setAnimationClass('prev');
    setCurrentIndex(prevIndex);
  };

  return (
   <>
   <div className='container-fixed'>
   <div className={`slider ${animationClass}`}>
      <div className="list">
        {images.map((image, index) => (
          <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`}>
            <img src={image.src} alt={image.type} />
            <div className="content">
              <div className="title">Leading with Sustainability in Real Estate</div>
              <div className="type">{image.type}</div>
              <div className="description">
                <p>Unlock strategic frameworks designed to foster profitability, sustainability, and social responsibility in every real estate venture.</p>
              </div>
              <div className="button">
                <button className="button">Start Your ESG Journey</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {reorderedImages.map((image, index) => (
          <div key={index} className={`item ${index === 0 ? 'active' : ''}`}>
            <img src={image.src} alt={image.type} className='w-100' />
          </div>
        ))}
      </div>

      <div className="nextPrevArrows">
        <button className="prev" onClick={handlePrev}> 
          <i className="fa-sharp fa-solid fa-backward"></i> 
        </button>
        <button className="next" onClick={handleNext}> 
          <i className="fa-sharp fa-solid fa-forward"></i> 
        </button>
      </div>
    </div>
   </div>
   </>
  );
};

export default Imageslider;
