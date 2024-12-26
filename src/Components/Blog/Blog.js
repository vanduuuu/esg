import React from 'react';
import Blogcard from './Blogcard';
import Blogdata from './Blogdata';
import Banner from '../Banner/Banner';
import banner4 from '../../assets/abt-banner.png';

const Blogcards = () => {
  return (
    <>
       <Banner
        title="BLOG"
        backgroundImageUrl= {banner4} // Replace with your image URL
      /> 
        <div className="blog-card">
      <div className="container-fluid mt-5">
        <div className="row">
          {Blogdata.map((blog, index) => (
            <Blogcard key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
    </>

  );
};

export default Blogcards;
