import React from 'react';
import "./Subnavbar.css"
function Subnavbar() {
  return (
    <>
      <div className='nav-outer'>
      <header class="header">
        <a href="#" class="logo">LOgo</a>
        <input type="checkbox" id="check"/>
<label for="check" class="icons">
    <i class="fa-solid fa-bars" id="menu-icon"></i>
    <i class="fa-solid fa-xmark" id="close-icon"></i>
</label>

        <nav class="navbar">
            <a href="#" style={{'--i':0}}>Home</a>
            <a href="#" style={{'--i':1}}>About</a>
            <a href="#" style={{'--i':2}}>Gallary</a>
            <a href="#" style={{'--i':3}}>Services</a>
            <a href="#" style={{'--i':4}}>contact</a>
        </nav>
    </header>
      </div>
    </>
  );
}

export default Subnavbar;