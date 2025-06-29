// src/components/Footer.jsx

import React from "react";
import "../App.css"; // Or wherever your styles are

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#settings">Settings</a>
      </div>
    </footer>
  );
}

export default Footer;
