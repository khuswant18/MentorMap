import React from "react";
import "./TopMentorCard.css";
import { motion } from "framer-motion";

const mentors = [
  {
    id: "1",
    name: "Khuswant Rajpurohit",
    designation:"Student",
    avatar: "/Student-4.png",
  },
  {
    id: "2",
    name: "Kevish Sewliya",
    designation:"Student",
    avatar: "/student-1.png",
  },
  {
    id: "3",
    name: "Krishna Gehlot",
    designation:"Student",

    rating: "4.8",
    reviewCount: "8",
    education: "Newton School of Technology, CSE",
    price: "Free",
    avatar: "/student-2.png",
    expertise: ["College", "Career Advice"],
  },
  {
    id: "4",
    name: "Rajat Srivastav",
    designation:"Student",
    rating: "4.9",
    reviewCount: "6",
    education: "Scaler School of Technology, CSE",
    price: "Free",
    avatar: "/student-3.png",
    expertise: ["DSA", "College Life"],
  },
];

function TopMentorCard() {

  return (
    <section className="top-mentors-section">
      <div className="section-header">
        <h1 className="section-title">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Team

          </motion.div>
        </h1>
      </div> 

      <section className="team-section">
        {mentors.map((mentor)=>(
            <div key={mentor.id} className="team-grid">
            <div className="team-card"> 
              <div className="team-avatar">
                <span><img class="student-avatar" src={mentor.avatar}  /></span>
              </div>
              <h3>{mentor.name}</h3>
              <p className="team-title">{mentor.designation}</p>
              <p className="team-bio">
                Former Dean of Admissions at IIT Delhi with 15+ years of experience in higher education administration.
              </p>
            </div>

            
          </div>

        ))}

          
        </section>
    </section>
  );
}

export default TopMentorCard;
