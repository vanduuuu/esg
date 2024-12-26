import React from 'react';
import Banner from '../Banner/Banner';
import india from '../../assets/india-flag.webp';
import us from '../../assets/us-flag.png';
import banner5 from '../../assets/electric-car-concept-green-sustainable-energy-used-by-ev-charging-station-produced-from-renewable-resources-supply-charger-station-order-reduce-co2-emission.jpg';
import './Contact.css'
const Contact = () => {
  return (
    <>
      <Banner title="CONTACT US" backgroundImageUrl={banner5} />

      <div className="container padding-h1" data-aos="fade-up">
        <div id="contact">
          <div className="text-center">
            <h6 className="post-date">We’d Love to Hear from You!</h6>
            <h1 className="boldtitle">Reach out and connect</h1>
            <p>
              Whether you're looking to discuss ESG strategies, get advice on sustainability
              initiatives, or simply learn more about how we can help your organization, we are here to assist.
            </p>
          </div>
        </div>
      </div>

 <div className='cont-bg1'>
 <div className="container-fluid">
        <div className="row">
          {/* Contact Details and Map in One Row */}
          <div className="col-lg-3 col-md-6 publisher">
            <h3 className='contact1'>Contact Details</h3>
          
            <div className="contct">
              <ul style={{ listStyle: 'none' }}>
                <li><img className="imgh my-2" src={india} alt="India Flag" loading="lazy" /><span className='mx-3 fw-bold fs-5'>India</span></li>
                <li><p><span><i className="fas fa-phone"></i> Phone</span> : +91 - 22 48888888 / 46165798</p></li>
                <li><p><span><i className="fas fa-phone"></i> Mobile</span> : +91 - 8097283444</p></li>
               
                <li><img className="imgh my-2" src={us} alt="India Flag" loading="lazy" /><span className='mx-3 fw-bold fs-5'>US</span></li>
                <li><p><span><i className="fas fa-phone"></i> Phone</span> : +1 424-239-0105</p></li>
                <li><p><span><i className="fas fa-envelope"></i> Email</span> :  mail@precisiongrow.co.in</p></li>
              </ul>
            </div>
          </div>

          
          <div className="col-lg-4 col-md-6 publisher">
            <h3 className='contact1'>Address</h3>
            <h5>Corporate Office:</h5>
            <p>Unit No 22, Building No. 2(A3), Sector 1, Millennium Business Park, Mahape, Navi Mumbai, 400710</p>
            <h5>Regd. Office:</h5>
            <p>Plot No 80/81, Shop No 155, Vashi Plaza, Sector 17 Vashi, Mumbai, Mumbai City, Maharashtra, 400703</p>
            <h5>Project Office:</h5>
            <p>61, City Tower, Unit No 2, Dr. S.S. Rao Road, Parel, Mumbai, 400012</p>
          
          </div>
          {/* Google Map Embed */}
          <div className="col-lg-5 col-md-12">
            <div className="map-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101433.85411961254!2d73.05261854442173!3d19.127030012503543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c18d9a0f2377%3A0xeb69a81457fd381d!2sVashi%20Plaza!5e0!3m2!1sen!2sin!4v1711518378438!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Address Section (New Grid Below the Map) */}
        
        </div>
 </div>
  

      {/* Contact Form */}
      <div className="container">
        <h2 className='padding-h1 text-center'>You can also fill out the contact form below, and one of our specialists will reach out to you as soon as possible.</h2>
        <div className="col-lg-10 border frrm mx-auto">
          <form action="/" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="col-md-6 form-group mt-4 mt-md-0">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-group mt-4">
              <label htmlFor="phone">Phone *</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                id="phone"
                placeholder="Enter your phone"
                required
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="message">Your Message *</label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                rows="5"
                placeholder="Your additional messages..."
                required
              ></textarea>
            </div>

            <div class="button"><button title="Lets Discuss Your ESG Goals!">Submit</button></div>
          </form>
        </div>
        <h2 className='text-center padding-h1'>We look forward to partnering with you for a brighter, more sustainable future.</h2>
      </div>
<div class="container my-3 text-center">
  <div class="mb-4">
    <h3 class="contact1">Business Hours</h3>
    <p><strong>Monday to Friday:</strong> 9:00 AM - 6:00 PM</p>
    <p><strong>Saturday & Sunday:</strong> Closed</p>
  </div>

  <div class="mb-4">
    <h3 class="contact1">Stay Connected</h3>
    <p>Follow us on social media to keep up with the latest insights, news, and updates in the world of ESG and sustainability.</p>
    <div>
      <a href="https://www.linkedin.com" target="_blank" class="btn btn-outline-primary m-1">
        <i class="fab fa-linkedin"></i> LinkedIn
      </a>
      <a href="https://twitter.com" target="_blank" class="btn btn-outline-primary m-1">
        <i class="fab fa-twitter"></i> Twitter
      </a>
      <a href="https://www.facebook.com" target="_blank" class="btn btn-outline-primary m-1">
        <i class="fab fa-facebook-f"></i> Facebook
      </a>
      <a href="https://www.instagram.com" target="_blank" class="btn btn-outline-primary m-1">
        <i class="fab fa-instagram"></i> Instagram
      </a>
    </div>
  </div>

  <div>
    
  </div>
</div>


    </>
  );
};

export default Contact;
