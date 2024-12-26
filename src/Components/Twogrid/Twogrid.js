import React from 'react';
import './Twogrid.css';


function Twogrid({
  title,
  description,
  bulletPoints,
  iconClass,
  imageSrc,
  reverse = false,
  imageAlt = 'Image',
  style = {}, // Default empty style object if no styles are passed
}) {


  return (
    <div className="container py-4" style={style}>
      {/* Row with fade-up animation */}
      <div 
        className={`row align-items-center ${reverse ? 'flex-row-reverse' : ''}`}
        data-aos="fade-up" // Apply fade-up animation here
      >
        {/* Text Column */}
        <div className="col-lg-6">
          <h2 className="boldtitle">{title}</h2>
          <p>{description}</p>
          <ul className="p-0">
            {bulletPoints?.map((point, index) => (
              <li key={index}>
                <p><i className={iconClass}></i> {/* Icon */}{point}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Column */}
        <div className="col-lg-6">
          <img src={imageSrc} alt={imageAlt} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Twogrid;
