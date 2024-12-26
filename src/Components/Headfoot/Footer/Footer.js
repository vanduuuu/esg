import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-center">
            {/* Company Intro Widget */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget company-intro-widget">
                <a href="index.html" className="site-logo">
                  {/* <img src="https://i.ibb.co/vLDyPtM/ak-logo-yellow.png" alt="logo" /> */}
               <h1 className='text-white'>LOgo</h1>
                </a>
                <p>
                Transforming real estate with sustainable, innovative solutions for a greener, profitable, and socially responsible future.                </p>
                <ul className="company-footer-contact-list">
                  <li><i className="fas fa-phone"></i>
+91 8097283444
</li>
                  <li><i className="fas fa-clock"></i>Mon - Sat 8.00 - 18.00</li>
                </ul>
              </div>
            </div> {/* widget end */}

            {/* Popular Courses Widget */}
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="widget course-links-widget">
                <h5 className="widget-title">Explore</h5>
                <ul className="courses-link-list">
                  <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i> <span>About Us</span></a></li>
                  <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i> <span>Services</span></a></li>
                  <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i> <span>Sustainability</span></a></li>
                  <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i> <span>Contact</span></a></li>
                
                </ul>
              </div>
            </div> {/* widget end */}

            {/* Latest News Widget */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="widget latest-news-widget">
                <h5 className="widget-title">Empowering sustainable real estate solutions for a brighter, responsible future.</h5>
                <ul className="small-post-list">
                  <li>
                    <div className="small-post-item">
                      <a href="#" className="post-date fs-6">Corporate Office :</a>
                      <h6 className="small-post-title"><a href="#">Unit No 22, Building No. 2(A3), Sector 1, Millennium Business Park, Mahape, Navi Mumbai, 400710</a></h6>
                    </div>
                  </li>
                  <li>
                    <div className="small-post-item">
                      <a href="#" className="post-date fs-6">Regd. Office :</a>
                      <h6 className="small-post-title"><a href="#">Plot No 80/81, Shop No 155, Vashi Plaza, Sector 17 Vashi, Mumbai, Mumbai City, Maharashtra, 400703</a></h6>
                    </div>
                  </li>
                  <li>
                    <div className="small-post-item">
                      <a href="#" className="post-date fs-6">Project Office :</a>
                      <h6 className="small-post-title"><a href="#">61, City Tower, Unit No 2, Dr. S.S. Rao Road, Parel, Mumbai, 400012</a></h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div> {/* widget end */}

            {/* Newsletter Widget */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget newsletter-widget">
                <h5 className="widget-title">Newsletter</h5>
                <div className="footer-newsletter">
                  <p>Subscribe to our newsletter for the latest insights on sustainable real estate, innovations, and industry trends.</p>
                  <form className="news-letter-form">
                    <input type="email" name="news-email" id="news-email" placeholder="Your email address" />
                    <input type="submit" value="Send" />
                  </form>
                </div>
              </div>
            </div> {/* widget end */}
          </div>
        </div> 
      </div> {/* footer-top end */}

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 text-sm-left text-center">
              <span className="copy-right-text">© 2019 <a href="https://codepen.io/anupkumar92">Precision grow</a> All Rights Reserved.</span>
            </div>
            <div className="col-md-6 col-sm-6">
              <ul className="terms-privacy d-flex justify-content-sm-end justify-content-center">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div> {/* footer-bottom end */}
    </footer>
  );
};

export default Footer;
