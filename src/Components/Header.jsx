import React from 'react';
//import './Header.css';
import BellIcon from '../Assets/Bell.svg';
import ProfileIcon from '../Assets/profile.svg'
import name from '../Assets/NAME.png'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Header = () => {
  
  return (
    <header className="header-container">
      <div className="logo-section">
        <img src={name}/>
      </div>
      
      <nav className="navigation">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
        <NavLink to="/leaderboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Leaderboard</NavLink>
        <NavLink to="/calendar" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Calendar</NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Settings</NavLink>

      </nav>

        <div className='right-section'>
        <div className="icons">
        <Link to ="/" className='icon-link'><img src={BellIcon} className="icon"></img></Link>
         <Link to="/profile" className="icon-link"><img src={ProfileIcon} className="icon"></img></Link>
         </div>
        

        </div>
    </header>
  );
};

export default Header;