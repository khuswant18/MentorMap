import "./About.css"
import React from 'react'
import { useNavigate } from "react-router-dom"

export default function About() {

  const navigate = useNavigate()
 
  return (
    <div className="about-container"> 

      

      <main className="main-content">
        <section className="mission-section">
          <div className="section-header">
            <h2>Our Mission</h2>
            <div className="section-divider"></div>
          </div>
          <div className="mission-content">
            <div className="mission-text">
              <p>
                At RankMate, we are dedicated to democratizing access to quality college counseling through innovative
                technology. We believe every student deserves personalized guidance to navigate the complex college
                admissions landscape.
              </p>
              <p>
                Our mission is to empower students with data-driven insights, personalized recommendations, and
                comprehensive resources that help them make confident, informed decisions about their academic future.
                By combining advanced AI technology with expert knowledge, we're transforming how students approach
                college selection and admissions.
              </p>
            </div>
            <div className="mission-values">
              <div className="value-item">
                <div className="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <h3>Accessibility</h3>
                <p>Making expert guidance available to all students regardless of background</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3>Excellence</h3>
                <p>Continuously improving our platform with cutting-edge technology</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3>Transparency</h3>
                <p>Providing clear, honest information to help students make informed decisions</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content"> 
            <h2>Ready to Find Your Perfect College Match?</h2>
            <p>
              Join thousands of students who have successfully navigated their college journey with RankMate's
              personalized guidance.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary" onClick={()=>navigate('/explorecolleges')}>Get Started Today</button>
              <button className="cta-secondary" onClick={()=>navigate('/findmentor')}>Schedule a Demo</button>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}
