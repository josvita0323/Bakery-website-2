import React from 'react';

import './style/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div className="coustom1">
    <div className="Section1">
    
      <section >
        <div className="homee">
          <div className="home">
          <div className="contact-container">
          <div className="contact-left"> 
             <h2>Contact Us</h2>
            <p><FontAwesomeIcon icon={faPaperPlane} /> contact@gmail.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> 3778752892</p>
        
          <div className="social-icons">
         
            <button><FontAwesomeIcon icon={faInstagram} /></button>
            <button><FontAwesomeIcon icon={faTwitter} /></button>
            <button><FontAwesomeIcon icon={faFacebook} /></button>
          </div>
          </div>

          <div className="contact-right">
             <form action="#" method="post">
             <input type="text" name="Name" placeholder="Your name" required />
             <input type="email" name="Email" placeholder="Your email" required />
             <textarea name="Message" rows="6" placeholder="Your message"></textarea>
             <button type="submit">Submit</button>
             </form>
          </div>
          </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
