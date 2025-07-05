// OurStory.jsx
import React from 'react';
import '../AboutUs.css';
import BellIcon from '../Assets/Bell.svg';
import profileIcon from '../Assets/profile-icon.svg';
import nameLogo from '../Assets/NAME.png';
import bgImage from '../Assets/bg_image_abt_us.jpeg'
import Header from './Header';


const AboutUs = () => {
  return (
    <div className='page-container'>
     <header
  className='head'
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>

        <div className="overlay"></div>
  
        <div style={{backgroundColor:"#212832"}}>
       <Header/></div>

        <div className="hero-content">
          <h1>Our Story</h1>
          <p>
            We’re a passionate team of developers from COEP Technological University, dedicated to empowering
            personal growth through technology and smart habit-tracking solutions.
          </p>
        </div>
      </header>

      <section className="story-section">
        <p>
          HABIT UP helps users build and track better habits through simple, effective tools like calendars, dashboards,
          reminders, and leaderboards.
          <br /><br />
          We make habit-building easy, consistent, and rewarding.
        </p>
      </section>

      <footer>
        © 2025 YourHabitApp. Built with passion by students of COEP Technological University.
      </footer>
    </div>
  );
};

export default AboutUs;
