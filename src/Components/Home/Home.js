import React from 'react';
import Imageslider from './Imageslider/Imageslider';
import Twogrid from '../Twogrid/Twogrid';
import './Home.css';
import imgRight from '../../assets/urban-jungle-building-parkroyal-singapore.jpg'
import Titlepara from '../Titlepara/Titlepara';
import Circlecard from '../Circlecard/Circlecard';
import cicle1 from '../../assets/Circular Economy Solutions.png'
import cicle2 from '../../assets/Renewable Energy and Off-Grid Solutions.png'
import cicle3 from '../../assets/Marketing and Brand Positioning.png'
import cicle4 from '../../assets/Risk Management and Resilience Planning.png'


import cicle5 from '../../assets/ESG Strategy Development.png'
import cicle6 from '../../assets/Sustainable Building Certification Services.png'
import cicle7 from '../../assets/Carbon Management and Net-Zero Planning.png'
import cicle8 from '../../assets/Energy and Resource Efficiency Services.png'
import cicle9 from '../../assets/Sustainable Design and Development Advisory.png'
import cicle10 from '../../assets/ESG Reporting and Compliance.png'
import cicle11 from '../../assets/Social Impact Services.png'
import cicle12 from '../../assets/Smart and Sustainable Technology Integration.png'
import cicle13 from '../../assets/Investment and Financial Advisory.png'
import cicle14 from '../../assets/Training and Capacity Building.png'
import cicle15 from '../../assets/Strategic Partnerships and Collaborations.png'
import visionimg from '../../assets/vision-4.jpg'
import Iconslider from '../../Components/Iconslider/Iconslider'
function Home() {
  return (
    <>
      {/* Image Slider Section */}
      <Imageslider />

      {/* Main Content Section with Twogrid */}
      <section className='padding-h1'>
        <Twogrid
          title="Why ESG and Sustainability Matter in Real Estate"
          description="In today’s world, integrating ESG principles into real estate is essential. ESG drives profitability, promotes sustainability, improves community well-being, and ensures regulatory compliance. As demand for responsible practices grows, embracing ESG is crucial for creating resilient, future-proof properties."
          bulletPoints={[
            'Environmental Responsibility',
            'Economic Benefits',
            'Social Impact',
            'Regulatory Compliance and Risk Mitigation',
            'Investor Demand',
          ]}
          iconClass="fas fa-check"
          imageSrc = {imgRight}
          reverse={false}
          style={{
            // backgroundColor: '#f0f8ff', // Light blue background
            padding: '3rem 1.5rem', // Custom padding
            // borderRadius: '10px', // Rounded corners
            // boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Shadow effect
          }}
        />
      </section>


      <div className="width-1">
      <section className="padding-h1">
        <Titlepara
  title="Our core sustainability services include:"
  paragraph="In today’s world, integrating ESG principles into real estate is essential. ESG drives profitability, promotes sustainability, improves community well-being, and ensures regulatory compliance. As demand for responsible practices grows, embracing ESG is crucial for creating resilient, future-proof properties."
  titleStyle={{
    color: '#d6dce5',
    fontWeight: 'bold',
    textShadow: '2px 2px 5px black'
  }}
  paraStyle={{ color: '#002458' }}
/>

      </section>
    </div>
    <section className='padding-h1'>
   <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-lg-3 col-md-6'>
      <Circlecard
        imageSrc={cicle5}
        title="ESG Strategy Development"
        number="1"
      />
      </div>
      <div className='col-lg-3 col-md-6'>
      <Circlecard
        imageSrc={cicle6}
        title="Sustainable Building Certification Services"
        number="2"
      />
      </div>
      <div className='col-lg-3 col-md-6'>
      <Circlecard
        imageSrc={cicle7}
        title="Carbon Management and Net-Zero Planning"
        number="3"
        // description="This is the description for card 2."
        // tags={['Technology', 'Innovation']} 
        // style={{ backgroundColor: '#a9d7ea6b' }}
      />
      </div>
      <div className='col-lg-3 col-md-6'>
      <Circlecard
        imageSrc={cicle8}
        title="Energy and Resource Efficiency Services"
        number="4"
        // description="This is the description for card 2."
        // tags={['Technology', 'Innovation']} 
        // style={{ backgroundColor: '#a9d7ea6b' }}
      />
      </div>
     
      <div className='col-lg-3 col-md-6'>
      <Circlecard
        imageSrc={cicle9}
        title="Sustainable Design and Development Advisory"
        number="5"
        // description="This is the description for card 2."
        // tags={['Technology', 'Innovation']} 
        // style={{ backgroundColor: '#a9d7ea6b' }}
      />
      </div>
      <div className='col-lg-3 col-md-6'>
      <Circlecard
        imageSrc={cicle10}
        title="ESG Reporting and Compliance"
        number="6"
        // description="This is the description for card 2."
        // tags={['Technology', 'Innovation']} 
        // style={{ backgroundColor: '#a9d7ea6b' }}
      />
      </div>
      <div className='col-lg-3 col-md-6'>
      <Circlecard
        imageSrc={cicle11}
        title="Social Impact Services"
        number="7"
        // description="This is the description for card 2."
        // tags={['Technology', 'Innovation']} 
        // style={{ backgroundColor: '#a9d7ea6b' }}
      />
      </div>
      <div className='col-lg-3 col-md-6'>
      <Circlecard
        imageSrc={cicle12}
        title="Smart and Sustainable Technology Integration"
        number="8"
        // description="This is the description for card 2."
        // tags={['Technology', 'Innovation']} 
        // style={{ backgroundColor: '#a9d7ea6b' }}
      />
      </div>
      <div className='col-lg-3 col-md-6'>
      <Circlecard
        imageSrc={cicle4}
        title="Risk Management and Resilience Planning"
        number="9"
        // description="This is the description for card 2."
        // tags={['Technology', 'Innovation']} 
        // style={{ backgroundColor: '#a9d7ea6b' }}
      />
      </div>
      <div className='col-lg-3 col-md-6'>
      <Circlecard
        imageSrc={cicle14}
        title="Training and Capacity Building"
        number="10"
        // description="This is the description for card 2."
        // tags={['Technology', 'Innovation']} 
        // style={{ backgroundColor: '#a9d7ea6b' }}
      />
      </div>
      <div className='col-lg-3 col-md-6'>
      <Circlecard
        imageSrc={cicle13}
        title="Investment and Financial Advisory"
        number="11"
        // description="This is the description for card 2."
        // tags={['Technology', 'Innovation']} 
        // style={{ backgroundColor: '#a9d7ea6b' }}
      />
      </div>
      <div className='col-lg-3 col-md-6'>
      <Circlecard
        imageSrc={cicle1}
        title="Circular Economy Solutions"
        number="12"
        // description="This is the description for card 2."
        // tags={['Technology', 'Innovation']} 
        // style={{ backgroundColor: '#a9d7ea6b' }}
      />
      </div>
      <div className='col-lg-3 col-md-6'>
      <Circlecard
        imageSrc={cicle2}
        title="Renewable Energy and Off-Grid Solutions"
        number="13"
        // description="This is the description for card 2."
        // tags={['Technology', 'Innovation']} 
        // style={{ backgroundColor: '#a9d7ea6b' }}
      />
      </div>
      <div className='col-lg-3 col-md-6'>
      <Circlecard
        imageSrc={cicle3}
        title="Marketing and Brand Positioning"
        number="14"
        // description="This is the description for card 2."
        // tags={['Technology', 'Innovation']} 
        // style={{ backgroundColor: '#a9d7ea6b' }}
      />
      </div>
      <div className='col-lg-3 col-md-6'>
      <Circlecard
        imageSrc={cicle15}
        title="Strategic Partnerships and Collaborations"
        number="15"
        // description="This is the description for card 2."
        // tags={['Technology', 'Innovation']} 
        // style={{ backgroundColor: '#a9d7ea6b' }}
      />
      </div>
    </div>
   </div>
   </section>

   <div className='home-contact bg-danger'>
  <section className='padding-h1'>
    <div className='container'>
      <ul>
        <li><h1 className='text-white'>Have questions or ready to start your sustainability journey? Get in touch with our experts today!</h1></li>
        <li>
          <div className="button">
            <button title='Lets Discuss Your ESG Goals!'>contact us</button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</div>
<Twogrid
  title="Our Vision"
  description="The future points towards innovative solutions like net-zero buildings, smart cities, and green finance, ensuring that the industry contributes to global efforts in creating a sustainable and equitable world."
  imageSrc={visionimg}
  reverse={true} // Reverse the order (image on the left)
  style={{
    // backgroundColor: 'red', // Light blue background
    padding: '3rem 1.5rem', // Custom padding
    // borderRadius: '10px', // Rounded corners
    // boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Shadow effect
  }}
/>
<Iconslider/>
    </>
  );
}

export default Home;
