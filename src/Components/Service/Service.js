import React from 'react';
import Banner from '../Banner/Banner';
import banner4 from '../../assets/urban-jungle-building-parkroyal-singapore.jpg'
import HorizontalCard from '../Horizontalcard/Horizontalcard';

function Service() {
  const listItems1 = [
    'Custom ESG Framework Design',
    'Roadmap for Sustainability Goals',
    'Materiality Assessments',
  ];
  const listItems2 = [
    'Green Building Certifications',
    'Pre-certification Assessments',
    'Post-certification Support',
  ];
  const listItems3 = [
    'Carbon Footprint Assessment',
    'Carbon Offsetting Solutions',
    'Net-Zero Strategy Development',
  ];
  const listItems4 = [
    'Energy Audits',
    'Energy Management Systems',
    'Water Efficiency Solutions',
  ];
  const listItems5 = [
    'Eco-Friendly Construction Practices',
    'Passive Design Strategies',
    'Biodiversity Preservation',
  ];
  const listItems6 = [
    'Sustainability Reporting',
    'Regulatory Compliance',
    'Impact Measurement',
  ];
  const listItems7 = [
    'Affordable Housing Solutions',
    'Community Engagement Programs',
    'Wellness-Focused Developments',
  ];
  const listItems8 = [
    'Smart Building Solutions',
    'Digital Twin Technology',
    'Data-Driven Insights',
  ];
  const listItems9 = [
    'Climate Risk Assessments',
    'Resilience Strategies',
    'Supply Chain ESG Audits',
  ];
  const listItems10 = [
    'Workshops and Seminars',
    'Tenant Education',
    'Internal ESG Leadership Development',
  ];
  const listItems11 = [
    'Green Financing Assistance',
    'ESG-Driven Investment Strategies',
    'Cost-Benefit Analysis',
  ];
  const listItems12 = [
    'Waste Management Strategies',
    'Material Reuse and Recycling',
    'Lifecycle Assessments',
  ];
  const listItems13 = [
    'On-Site Renewable Energy Systems',
    'Energy Storage Solutions',
    'Off-Grid Solutions',
  ];
  const listItems14 = [
    'ESG Brand Enhancement',
    'Stakeholder Communication',
    'Sustainability Campaigns',
  ];
  const listItems15 = [
    'Industry Networking',
    'Government and NGO Liaison',
    'Global Sustainability Forums',
  ];
  return (
    <>
     <Banner
        title="SERVICES"
        backgroundImageUrl= {banner4} // Replace with your image URL
      /> 
      <div className='container'>
        <h3 className='padding-h1 text-center'>Our ESG services are designed to guide your organization through the complexities of sustainable growth, offering a tailored approach that spans multiple industries and sectors.</h3>
      </div>
     {/* Default Layout (Image on Left) */}
     <HorizontalCard 
        title="ESG Strategy Development"
        paragraph="We create custom ESG frameworks to help you identify sustainability goals, assess materiality, and develop roadmaps that align with your unique business objectives."
        listItems={listItems1}
        imageSrc= {banner4 } 
        cardNumber={1} // Dynamic card number

      />

      {/* Reversed Layout (Image on Right) */}
      <HorizontalCard 
        reverseLayout={true}
        title="Sustainable Building Certification Services"
        paragraph="From green building certifications to carbon management, we support businesses in gaining certifications that boost credibility and reduce environmental impact."
        listItems={listItems2}
        imageSrc= {banner4 } // Another image URL
        cardNumber={2} // Dynamic card number

      />
      <HorizontalCard 
        title="Carbon Management and Net-Zero Planning"
        paragraph="Our carbon footprint assessments and net-zero strategies help you reduce emissions and offset your environmental impact, ensuring your business is part of the solution."
        listItems={listItems3}
        imageSrc= {banner4 } // Pass the image URL here
        cardNumber={3} // Dynamic card number

      />

      {/* Reversed Layout (Image on Right) */}
      <HorizontalCard 
        reverseLayout={true}
        title="Energy and Resource Efficiency Services"
        paragraph="We help businesses optimize their energy usage and implement resource-efficient solutions, reducing costs while contributing to a sustainable future."
        listItems={listItems4}
        imageSrc= {banner4 } // Another image URL
        cardNumber={4} // Dynamic card number
      />
      <HorizontalCard 
        title="Sustainable Design and Development Advisory"
        paragraph="We advise on eco-friendly design practices, from construction to the operational phase, ensuring that every step of your project is environmentally conscious and socially beneficial."
        listItems={listItems5}
        imageSrc= {banner4 }
        cardNumber={5} // Dynamic card number

      />

      {/* Reversed Layout (Image on Right) */}
      <HorizontalCard 
        reverseLayout={true}
        title="ESG Reporting and Compliance"
        paragraph="Our team assists with transparent reporting and ensuring compliance with local and international ESG regulations, helping you stay ahead in a competitive marketplace."
        listItems={listItems6}
        imageSrc= {banner4 } 
        cardNumber={6} // Dynamic card number

      />
      <HorizontalCard 
        title="Social Impact Services"
        paragraph="We guide organizations in creating impactful community programs, affordable housing solutions, and initiatives that focus on health and wellness to improve lives and build stronger communities."
        listItems={listItems7}
        imageSrc= {banner4 } 
        cardNumber={7} // Dynamic card number

      />

      {/* Reversed Layout (Image on Right) */}
      <HorizontalCard 
        reverseLayout={true}
        title="Smart and Sustainable Technology Integration"
        paragraph="By integrating smart building solutions and data-driven technologies, we help your business become more efficient and sustainable, driving innovation in how resources are managed."
        listItems={listItems8}
        imageSrc= {banner4 } // Another image URL
        cardNumber={8} // Dynamic card number

      />
      <HorizontalCard 
        title="Risk Management and Resilience Planning"
        paragraph="We assist businesses in assessing climate and operational risks, helping them build resilience through comprehensive risk strategies and sustainability audits."
        listItems={listItems9}
        imageSrc= {banner4 } // Pass the image URL here
        cardNumber={9} // Dynamic card number

      />

      {/* Reversed Layout (Image on Right) */}
      <HorizontalCard 
        reverseLayout={true}
        title="Training and Capacity Building"
        paragraph="Our training programs equip employees and stakeholders with the skills needed to drive ESG initiatives, fostering a culture of sustainability and responsibility within your organization."
        listItems={listItems10}
        imageSrc= {banner4 } // Another image UR
        cardNumber={10} // Dynamic card number

      />
      <HorizontalCard 
        title="Investment and Financial Advisory"
        paragraph="We offer guidance on green financing and ESG-driven investment strategies, helping you maximize returns while supporting your commitment to sustainability."
        listItems={listItems11}
        imageSrc= {banner4 } // Pass the image URL here
        cardNumber={11} // Dynamic card number

      />

      {/* Reversed Layout (Image on Right) */}
      <HorizontalCard 
        reverseLayout={true}
        title="Circular Economy Solutions"
        paragraph="Our circular economy services focus on waste reduction, material reuse, and lifecycle assessments, ensuring your business operates in harmony with nature."
        listItems={listItems12}
        imageSrc= {banner4 } // Another image URL
        cardNumber={12} // Dynamic card number

      />
      <HorizontalCard 
        title="Renewable Energy and Off-Grid Solutions"
        paragraph="We support businesses in adopting renewable energy systems and off-grid solutions, reducing dependence on traditional power sources and enhancing energy security."
        listItems={listItems13}
        imageSrc= {banner4 } // Pass the image URL here
        cardNumber={13} // Dynamic card number
      />

      {/* Reversed Layout (Image on Right) */}
      <HorizontalCard 
        reverseLayout={true}
        title="Marketing and Brand Positioning"
        paragraph="We help businesses enhance their brand through ESG communication, marketing sustainability efforts, and aligning stakeholder messaging to build trust and drive consumer loyalty."
        listItems={listItems14}
        imageSrc= {banner4 } // Another image URL
        cardNumber={14} // Dynamic card number

      />
         <HorizontalCard 
        title="Strategic Partnerships and Collaborations"
        paragraph="We foster collaborations with industry leaders, governments, and NGOs, helping your business stay at the forefront of sustainability discussions and initiatives."
        listItems={listItems15}
        imageSrc= {banner4 } // Pass the image URL here
        cardNumber={15} // Dynamic card number
      />
    </>
  );
}

export default Service;
