import React from 'react';
import './Circlecard.css'; // Custom styles for unique effects

function Circlecard({
  imageSrc,
  title,
  number,
  description,
  tags = [], // Optional prop for tags
  style = {}  // Inline style for custom card styles
}) {
  return (
    <div className="circle-card mb-4" style={{...style }} data-aos="fade-up">
<div className='inner-border'>
<div className="circle-card-number position-absolute m-3">
        {number}
      </div>

      {/* Image */}
      <div className="circle-card-img overflow-hidden">
        <img src={imageSrc} alt={title} className="card-img-top" />
      </div>

      {/* Card Body */}
      <div className="card-body card-body1 text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

        {/* Tags (optional) */}
        {tags.length > 0 && (
          <div className="circle-card-tags d-flex justify-content-center gap-2 mt-3">
            {tags.map((tag, index) => (
              <span key={index} className="badge badge-pill badge-primary">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>    
    </div>
  );
}

export default Circlecard;
