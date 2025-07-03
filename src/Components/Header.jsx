import React from 'react';
//import './Header.css';
import BellIcon from '../Assets/Bell.svg';
import ProfileIcon from '../Assets/profile.svg'
import name from '../Assets/NAME.png'

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-section">
        <img src={name}/>
      </div>
      
      <nav className="navigation">
        <a href="/" className="nav-link">Home</a>
        <a href="/" className="nav-link">Leaderboard</a>
        <a href="/" className="nav-link">Calendar</a>
        <a href="/" className="nav-link">Settings</a>
      </nav>

        <div className='right-section'>
        <div className="icons">
        <a href="/" className="icon-link"><img src={BellIcon} className="icon"></img></a>
         <a href="/" className="icon-link"><img src={ProfileIcon} className="icon"></img></a>
         </div>
        

        </div>
    </header>
  );
};

export default Header;