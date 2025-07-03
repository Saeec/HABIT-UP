import React from 'react';
import '../LandingPage.css';
import NAME from '../Assets/NAME.png';
import profileIcon from '../Assets/profile-icon.svg';
import landingPic1 from '../Assets/landing.pic.1.svg';
import landingPic2 from '../Assets/landing.pic.2.svg';
import DashboardWaves from '../Assets/Dashboard-waves.svg';

const LandingPage = () => {
  return (
    <div
  className="landing-page"
  style={{ backgroundImage: `url(${DashboardWaves})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={NAME} alt="Logo" className="logo" />
        </div>
        <div className="nav-buttons">
          <button className="auth-button sign-in">Sign in</button>
          <button className="auth-button log-in">Log in</button>
          <img src={profileIcon} alt="Profile" className="profile-icon" />
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">HABIT UP</h1>
          <h2 className="hero-subtitle">Track your habits wisely!</h2>
          <p className="hero-description">
            Track your daily habits, stay consistent, and build better routines
            with our powerful habit tracker. Visualize progress on a calendar,
            maintain streaks, get email reminders, and compete with others on
            the leaderboard. Whether you're starting new habits or breaking old
            ones, our platform keeps you motivated, accountable, and on track
            every single day. Start your journey today!
          </p>
        </div>
        <div className="hero-image">
          <img src={landingPic1} alt="Habit tracking illustration" />
        </div>
      </section>

      {/* Moto Section */}
      <section className="moto-section">
        <h2 className="moto-title">What we do?</h2>
        <p className="moto-text">
          We empower users to build and maintain positive daily habits by
          offering a smart tracking system with streaks, calendar views,
          personalized reminders, and a competitive leaderboard. Our platform
          ensures accountability, motivation, and long-term consistency by
          visually showcasing progress and engaging users with friendly
          competition and timely notifications.
        </p>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-image">
          <img src={landingPic2} alt="Start tracking habits" />
        </div>
        <div className="cta-content">
          <h2 className="cta-title">Change your habits with Habit tracker today!!</h2>
          <button className="cta-button">Start today!</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="page-footer">
        <div className="footer-content">
          <div className="footer-about">
            <h3 className="footer-heading">About Us</h3>
            <p className="footer-text">
              We're a team of passionate developers helping individuals build
              better habits through consistency, accountability, and smart
              tracking tools.
            </p>
            <h4 className="footer-subheading">Contact</h4>
            <p className="footer-text">📧 support@habittracker.com<br />📍 Pune, Maharashtra, India</p>
            <h4 className="footer-subheading">Follow Us</h4>
            <p className="footer-links">
              <a href="#">Instagram</a> |
              <a href="#">Twitter</a> |
              <a href="#">LinkedIn</a> |
              <a href="#">GitHub</a>
            </p>
          </div>

          <div className="footer-links-container">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="quick-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Leaderboard</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          © 2025 Habit Up. Built with passion by students of COEP Technological University.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;