import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <div className='footer-section'>
      <hr />
      <footer className="footer-container">
        <div className="cont-1">
          <h2>MentorMap</h2>
          <p>Connect in real-time with college students</p>
        </div>

        <div className="cont-2">
          <h3>Quick Links</h3>
          <NavLink to='/explorecolleges'>Find Colleges</NavLink>
          <NavLink to='/findmentor'>Find Mentors</NavLink>
          <NavLink to='/about'>About</NavLink>
        </div>

        <div className="cont-3">
          <h3>Support</h3>
          <NavLink to='/help'>Help Center</NavLink>
          <NavLink to='/terms'>Terms & Conditions</NavLink>
          <NavLink to='/privacy'>Privacy Policy</NavLink>
        </div>

        <div className="cont-4">
          <h3>Connect with us</h3>
          <div className="socials">
            <a href="https://www.instagram.com/khuswant_purohit_/" className='social-link'><Instagram /></a>
            <a href="https://x.com/KhuswantRa45688" className='social-link'><Twitter /></a>
            <a href="https://www.linkedin.com/in/khuswant-rajpurohit-b749ba30a/" className='social-link'><Linkedin /></a>
            <a href="mailto:khuswantrajpurohit18@gmail.com" className='social-link'><Mail /></a>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <p>Made with ❤️ by Khuswant Rajpurohit</p>
      </div>
    </div>
  );
}

export default Footer;
