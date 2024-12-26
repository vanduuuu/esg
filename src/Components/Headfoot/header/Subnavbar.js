import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Subnavbar.css";

function Subnavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false); // Active state for dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setIsActive((prev) => !prev); // Toggle active state when clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu on link click
    setIsActive(false); // Reset active state
  };

  return (
    <>
      <div className="nav-outer">
        <header className="header">
          <a href="#" className="logo">
            Logo
          </a>
          <input type="checkbox" id="check" checked={isMenuOpen} onChange={toggleMenu} />
          <label htmlFor="check" className="icons">
            <i className="fa-solid fa-bars" id="menu-icon"></i>
            <i className="fa-solid fa-xmark" id="close-icon"></i>
          </label>

          <nav className="navbar">
            <NavLink to="/" className="nav-link" style={{ "--i": 1 }} onClick={handleLinkClick}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" style={{ "--i": 2 }} onClick={handleLinkClick}>
              About
            </NavLink>

            {/* Dropdown for Insight */}
            <div
              className={`dropdown ${isDropdownOpen ? "open" : ""}`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`nav-link dropdown-toggle ${isActive ? "active" : ""}`} // Add active class
                onClick={toggleDropdown}
              >
                Insight
              </button>
              <ul className="dropdown-menu">
               
                <li>
                  <NavLink to="/blogs" className="dropdown-item" onClick={handleLinkClick}>
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/reports" className="dropdown-item" onClick={handleLinkClick}>
                    Reports
                  </NavLink>
                </li>
              </ul>
            </div>

            <NavLink to="/service" className="nav-link" style={{ "--i": 3 }} onClick={handleLinkClick}>
              Services
            </NavLink>
            <NavLink to="/contact" className="nav-link" style={{ "--i": 4 }} onClick={handleLinkClick}>
              Contact
            </NavLink>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Subnavbar;
