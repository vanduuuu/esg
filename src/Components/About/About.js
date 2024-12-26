// Components/About/About.js
import React from "react";
import "./About.css";
import img1 from "../../assets/vision (2).jpg";
import img2 from "../../assets/researchers-looking-alternative-energy-souces.jpg";
import Banner from "../Banner/Banner";
import banner4 from '../../assets/abt-banner.png';
import Titlepara from "../Titlepara/Titlepara";
import Twogrid from "../Twogrid/Twogrid";
import bgright from '../../assets/brand-tree.png'
const About = () => {
  return (
    <>
     <Banner
        title="ABOUT US"
        backgroundImageUrl= {banner4} // Replace with your image URL
      /> 
      <div className="padding-h1">
            <section className="main-cont-padding">
          <div className="container-fixed abt-outerr">
            <div className="mycontainer">
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="position-relative abt-img-outer">
                        <img
                          src={img1}
                          alt="industrial-robots"
                          className="img1 rounded"
                        />
                        <p className="position-absolute botom-txt bottom-0 start-0 text-white bg-dark p-2 m-0">
                          Sustainability
                        </p>
                      </div>
                    </div>

                    {/* Second image */}
                    <div className="col-12 col-md-6 mt-4 mt-md-0">
                      <div className="position-relative abt-img-outer">
                        <img
                          src={img2}
                          alt="fibre-laser-robotic-remote-cutting-system"
                          className="img1 rounded img2"
                        />
                        <p className="position-absolute bottom-0 start-0 text-white bg-dark p-2 m-0">
                          Innovation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right grid: Text content */}
                <div className="col-lg-6">
                  <p className="post-date">WHO WE ARE</p>
                  <h1 className="boldtitle">
                    Your Trusted Partner in ESG Consultancy for a Sustainable
                    Future
                  </h1>
                  <p>
                    At Precision Grow, we are a leading ESG (Environmental,
                    Social, and Governance) consultancy committed to helping
                    organizations build sustainable and responsible businesses.{" "}
                  </p>
                  <p>
                    Our expertise is to give precise solutions in Environmental,
                    Social, and Governance to industries like real estate and
                    fertilizer.
                  </p>
                  <p>
                    Precision Grow’s expert team offers strategic guidance and
                    actionable solutions tailored to meet the growing demand for
                    social and environmental accountability in today's
                    fast-paced corporate world.
                  </p>
                  <p>
                    With a deep understanding of ESG principles, regulatory
                    frameworks, and market trends, we empower our clients to
                    navigate the complexities of sustainability, risk
                    management, and ethical governance. We assist businesses in
                    transforming their operations, unlocking value, and building
                    long-term success by integrating ESG criteria into their
                    core strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="abtvision">
     <div className="container">
     <section className=" padding-h1">
      <Titlepara
  title="Our Mission"
  paragraph="Our mission is simple: to drive positive change by enabling businesses to adopt and integrate effective ESG practices that benefit not just their bottom line but also society and the planet."
  titleStyle={{
    color: '#3086b7',
    fontWeight: 'bold',
    textShadow: '2px 2px 5px black',
    textAlign:'center',
    border:'2px solid #c2baba6b',
  }}
  paraStyle={{ color: '#ffff',textAlign:'center' }}
/>
      </section>
     </div>
      </div>
      <section className=" padding-h1">
      <Twogrid
          title="Why Choose Us?"
          description="With a passion for sustainability and corporate responsibility, Precision Grow has a proven track record of helping organizations exceed ESG goals. Our holistic approach blends technical expertise with practical business strategies, ensuring your company not only meets regulatory requirements but thrives in a changing world."
          bulletPoints={[
            'Expertise in ESG',
            'Proven Track Record',
            'Holistic Approach',
            'Commitment to Long-Term Success',
          ]}
          iconClass="fas fa-check"
          imageSrc = {bgright}
          reverse={false}
          style={{
            padding: '3rem 1.5rem', // Custom padding
         
          }}
        />
      </section>


    </>
  );
};

export default About;
