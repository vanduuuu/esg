import React, { useEffect } from 'react';
import PropTypes from 'prop-types'; // Import prop types for type-checking
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import './Horizontalcard.css'; // Import your custom CSS file for hover effects

const HorizontalCard = ({ reverseLayout, title, paragraph, listItems, imageSrc, cardNumber }) => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: true }); // `once: true` ensures the animation runs only once
  }, []); // Empty array ensures it runs once after the initial render

  return (
    <div className='container'>
      <div className="card p-4 border-0 mb-3 card-hover" data-aos="fade-up"> {/* Apply AOS to the card */}
        <div className="row g-0">
          {/* Image Container */}
          <div className={`col-md-4 img-container ${reverseLayout ? 'order-md-2' : ''}`} data-aos="fade-right">
            <img src={imageSrc} className="img-fluid rounded-start card-img" alt={title} />
            {cardNumber && (
              <div className="card-number">
                {cardNumber}
              </div>
            )}
          </div>

          {/* Content Container */}
          <div className={`col-md-8 ${reverseLayout ? 'order-md-1' : ''}`} data-aos="fade-left">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{paragraph}</p>

              {/* List Items with Font Awesome Icons */}
              {listItems && (
                <ul className="list-unstyled">
                  {listItems.map((item, index) => (
                    <li key={index} className="d-flex align-items-center">
                      <i className="fas fa-check-circle me-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HorizontalCard.propTypes = {
  reverseLayout: PropTypes.bool,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string),
  imageSrc: PropTypes.string.isRequired,
  cardNumber: PropTypes.number,
};

HorizontalCard.defaultProps = {
  reverseLayout: false,
  listItems: [],
  cardNumber: null,
};

export default HorizontalCard;
