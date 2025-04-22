import React from 'react'
import './TopMentorCard.css'
import { MessageSquare, Calendar } from 'lucide-react';

const mentors = [
  {
    id: '1',
    name: 'Kevish Sewliya',
    rating: '4.3',
    reviewCount: '5',
    education: 'Newton School of Technology, CSE',
    price: '99',
    avatar: '/student-1.png',
    expertise: ['College', 'DSA', 'Career Guidance'],
  },
  { 
    id: '2',
    name: 'Krishna Gehlot',
    rating: '4.8',
    reviewCount: '8',
    education: 'Newton School of Technology, CSE',
    price: '89',
    avatar: '/student-2.png',
    expertise: ['College', 'Career Advice'],
  },
  {
    id: '3',
    name: 'Rajat Srivastav',
    rating: '4.9',
    reviewCount: '6',
    education: 'Scaler School of Technology, CSE',
    price: '49',
    avatar: '/student-3.png',
    expertise: ['DSA', 'College Life'],
  },
]

function TopMentorCard() {
  return (
    <section className="top-mentors-section">
      <div className="section-header">
        <h1 className="section-title">Top Student Mentors</h1>
      </div>

      <div className="mentors-container">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-card">
            <div className="mentor-profile">

              <img src={mentor.avatar || "/placeholder.svg"}
                alt={`${mentor.name}'s profile`}
                className="mentor-avatar"
              />
              
              <h2 className="mentor-name">{mentor.name}</h2>

              <div className="mentor-rating">
                <span className="star-icon">★</span>
                <span className="rating-value">{mentor.rating}</span>
                <span className="review-count">({mentor.reviewCount})</span>
              </div>

              <p className="mentor-education">{mentor.education}</p>

              <div className="mentor-expertise">
                {mentor.expertise.map((skill, index) => (
                  <span key={index} className="expertise-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mentor-price">
                <span className="price-value">₹{mentor.price}</span>
                <span className="price-unit">per session</span>
              </div>

              <div className="mentor-actions">
                <button className="chat-button">
                  <MessageSquare size={16} />
                  Chat
                </button>
                <button className="call-button">
                  <Calendar size={16} />
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopMentorCard;
