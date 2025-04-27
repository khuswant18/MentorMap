import React from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import FloatingCard from "../FloatingCard/FloatingCard";

function Hero() {
  return (
    <div className="hero-container">
      <div className="container"></div> 
      <div className="background-glow"></div>

      <FloatingCard position="top-left" title = '📌 Find a Mentor Today !' children='Connect with experienced college students and get guidance on your career path, studies, and college life.'>
      </FloatingCard>

      <FloatingCard position="top-right" title = '📋 Are You a College?' children='List your college and help students find the right mentorship and guidance from your students.'>
      </FloatingCard>
      

      <FloatingCard position="bottom-left" title='📊 Explore College Resources' children='Discover valuable resources, events, and information shared by college students.'>
      </FloatingCard>

      <FloatingCard position="bottom-right" title='✅ Get Started with StudentConnect' children='Create your profile today to start connecting with college students and gaining insights.'>
      </FloatingCard>

      <div className="content">
        <div className="members-section">
          <Avatar />
          <div className="join-text">Join 3k+ Members</div>
          <NavLink href="#" className="button secondary">
            Join Now →
          </NavLink> 
        </div>

        <div className="hero-section">
          <h1>
            Connect with College Students in Real
            <br />
            time and clear all the Doubts
          </h1>

          


          <p className="subtitle">
          Discover the right mentor and college match tailored to your journey 
            <br />
            connect, learn, and grow with real students.
          </p>

          <div className="cta-buttons">
            <NavLink to="/findmentor" className="button dark">
              Find Mentors
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
