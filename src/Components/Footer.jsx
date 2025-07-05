// src/components/Footer.jsx

import React from "react";
import "../App.css"; // Or wherever your styles are
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
  <Link to="/aboutus">About</Link>
  <Link to="/aboutus">Contact</Link>
</div>
    </footer>
  );
}

export default Footer;
