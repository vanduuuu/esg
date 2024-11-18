import React, { useState } from 'react';
import './Imageslider.css';  // Import the CSS file

const Imageslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const images = [
    { src: 'https://i.ibb.co/qCkd9jS/img1.jpg', type: 'ENVIRONMENT' },
    { src: 'https://i.ibb.co/jrRb11q/img2.jpg', type: 'SOCIAL' },
    { src: 'https://i.ibb.co/NSwVv8D/img3.jpg', type: 'GOVERNANCE' },
    { src: 'https://i.ibb.co/Bq4Q0M8/img4.jpg', type: 'SUSUTAIABLE' }
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
    <div className={`slider ${animationClass}`}>
      <div className="list">
        {images.map((image, index) => (
          <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`}>
            <img src={image.src} alt={image.type} />
            <div className="content">
              <div className="title">Your Trusted Partner in Success</div>
              <div className="type">{image.type}</div>
              <div className="description">
              <p>We offer strategic frameworks to create, manage, and invest in properties that are profitable, socially responsible and environmentally conscious.</p>
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {reorderedImages.map((image, index) => (
          <div key={index} className={`item ${index === 0 ? 'active' : ''}`}>
            <img src={image.src} alt={image.type} />
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
  );
};

export default Imageslider;
