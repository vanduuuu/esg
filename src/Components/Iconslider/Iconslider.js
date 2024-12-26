import React from 'react';
import './Iconslider.css';
// Import images
import part1 from "../../assets/part-1.webp";
import part3 from "../../assets/part-3.webp";
import part4 from "../../assets/part-4.webp";
import part5 from "../../assets/part-5.webp";
import part6 from "../../assets/part-6.webp";
import part7 from "../../assets/part-7.webp";
import part8 from "../../assets/part-8.webp";
import part9 from "../../assets/part-9.webp";
import part10 from "../../assets/part-10.webp";
import part11 from "../../assets/part-11.webp";
import part12 from "../../assets/part-12.webp";
import part13 from "../../assets/part-13.webp";
import part14 from "../../assets/part-14.webp";
import part15 from "../../assets/part-15.webp";

const Iconslider = () => {
    const iconslider = [
        { img: part1 },
        { img: part3 },
        { img: part4 },
        { img: part5 },
        { img: part6 },
        { img: part7 },
        { img: part8 },
        { img: part9 },
        { img: part10 },
        { img: part11 },
        { img: part12 },
        { img: part13 },
        { img: part14 },
        { img: part15 }
    ];

    return (
        <div className="icon-slider" data-aos="fade-up"> {/* No need to call AOS.init() here */}
            <div className="icon-slide-track">
                {iconslider.map((slidee, index) => (
                    <div key={index} className={`icon-slide ${index === 0 ? "active" : ""}`} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                        <img src={slidee.img} height="100" width="200" alt={`Icon ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Iconslider;
