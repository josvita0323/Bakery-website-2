import React from 'react';

import './style/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">

        {/* About Us Section */}
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We are dedicated to providing the best products with a focus on quality, customer service, and uniqueness.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About us</a></li>
            <li><a href="/Contact">Contact Us</a></li>
            
          </ul>
        </div>

        {/* Social Icons Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-icons">
            <button><FontAwesomeIcon icon={faInstagram} /></button>
            <button><FontAwesomeIcon icon={faTwitter} /></button>
            <button><FontAwesomeIcon icon={faFacebook} /></button>
          </div>
        </div>
      </div>
      <p>© 2024 Your Company. All rights reserved.</p>
    </div>
  );
}
