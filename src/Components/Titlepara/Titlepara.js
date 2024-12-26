import React, { useState, useEffect } from 'react';

function Titlepara({
  title,  // Title text
  paragraph, // Paragraph text
  titleStyle = {},  // Custom style for the title
  paraStyle = {}  // Custom style for the paragraph
}) {
  // Set default font sizes for title and paragraph
  const [titleFontSize, setTitleFontSize] = useState('3.3rem');
  const [paraFontSize, setParaFontSize] = useState('1.1rem');

  // Update font sizes based on the window width
  useEffect(() => {
    const updateFontSize = () => {
      if (window.innerWidth < 768) {  // For mobile screens
        setTitleFontSize('2rem');  // Smaller title for mobile
        setParaFontSize('1rem');  // Smaller paragraph font for mobile
      } else if (window.innerWidth < 1024) {  // For tablets
        setTitleFontSize('2.5rem');
        setParaFontSize('1.05rem');
      } else {
        setTitleFontSize('3.3rem');  // Larger title for desktop
        setParaFontSize('1.1rem');  // Larger paragraph font for desktop
      }
    };

    updateFontSize();  // Initial call to set font size

    // Event listener for window resize
    window.addEventListener('resize', updateFontSize);

    // Cleanup the event listener when component unmounts
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  return (
    <div className="title-para-section">
      {/* Title */}
      <h2
        style={{
          color: '#d6dce5',
          fontSize: titleFontSize,  // Dynamically set font size
          fontWeight: 'bold',
          textShadow: '2px 2px 5px black',
          ...titleStyle
        }}
      >
        {title}
      </h2>

      {/* Paragraph */}
      <p
        style={{
          fontSize: paraFontSize,  // Dynamically set font size
          color: '#002458',
          ...paraStyle
        }}
      >
        {paragraph}
      </p>
    </div>
  );
}

export default Titlepara;
