// Components/Banner.js
import React from 'react';
import './Banner.css'; // Import custom CSS for styling

const Banner = ({ title, backgroundImageUrl }) => {
  return (
    <section
      className="banner-section py-5"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Overlay for the banner */}
      <div className="overlay"></div>

      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
      </div>
    </section>
  );
};

export default Banner;
