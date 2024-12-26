import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Subnavbar from './Components/Headfoot/header/Subnavbar';
import Home from './Components/Home/Home.js';
import Footer from './Components/Headfoot/Footer/Footer.js';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';
import Service from './Components/Service/Service.js';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';
import Blog from './Components/Blog/Blog.js';
import IGBC_Leading_India_Toward_a_Greener_Future_with_Sustainable_Building_Practices from './Components/Blog/IGBC_Leading_India_Toward_a_Greener_Future_with_Sustainable_Building_Practices.js'
function App() {
  useEffect(() => {
    // Initialize AOS only once in the root component
    AOS.init({ duration: 1000, once: false }); // Set duration for animation and trigger it only once
  }, []); // Empty dependency array ensures this runs only once when the app loads

  return (
    <Router>
      <Subnavbar />
      <Routes>
        {/* Define the routes for your components */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/IGBC_Leading_India_Toward_a_Greener_Future_with_Sustainable_Building_Practices" element={<IGBC_Leading_India_Toward_a_Greener_Future_with_Sustainable_Building_Practices/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
