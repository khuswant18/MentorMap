import React from 'react';
import './Footer.css';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Footer() {

  const navigate = useNavigate()
  
  return (
    <div className='footer-section'>
      <hr />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-text">MentorMap</span>
              <span className="logo-dot"></span>
            </div>
            <p>Transforming college admissions through personalized guidance and AI-powered insights.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Platform</h3>
              <ul>
                <li>
                  <a onClick={()=>navigate('/explorecolleges')}>Explore Collegs</a> 
                </li>
                <li>
                  <a onClick={()=>navigate('/findmentor')}>Find Mentors</a>
                </li>
                <li>
                  <a onClick={()=>navigate('/about')}>About</a>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li>
                  <a onClick={()=>navigate('/about')}>About Us</a>
                </li>
                <li>
                  <a onClick={()=>navigate('/TopMentorCard')}>Our Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
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


          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RankMate. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
