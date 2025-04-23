import React from 'react'
import './CollegeCard.css'

const colleges = [ 
  {
    id: 1,
    name: 'Newton School of Technology',
    logo: '/college-1.png',
    type: 'Private',
    location: { city: 'Delhi,NCR', state: 'Haryana' },
    rating: 4.8,
    popularCourses: ['Computer Science', 'Mechanical', 'Electrical'],
  },
  {
    id: 2,
    name: 'Scaler School of Technology',
    logo: '/college-2.png',
    type: 'Private',
    location: { city: 'Bengaluru', state: 'Karnataka' },
    rating: 4.8,
    popularCourses: ['Computer Science', 'Mechanical', 'Electrical'],
  },
  {
    id: 3,
    name: 'VIT Vellore',
    logo: '/college-3.png',
    type: 'Private',
    location: { city: 'Vellore', state: 'Tamil Nadu' },
    rating: 4.8,
    popularCourses: ['Computer Science', 'Mechanical', 'Electrical'],
  },
  {
    id: 4,
    name: 'JAYPEE Noida',
    logo: '/college-4.png',
    type: 'Private',
    location: { city: 'Noida', state: 'UP' },
    rating: 4.8,
    popularCourses: ['Computer Science', 'Mechanical', 'Electrical'],
  },
]

function CollegeCard() {
  return (
      <div className="colleges-container">
        
        {colleges.map((college) => ( 
          <div key={college.id} className="college-card">

            <div className="college-header">
              <img
                src={college.logo || '/placeholder.svg'}
                alt={`${college.name} logo`}
                className="college-logo"
              />
              <div className="college-info">
                <h2 className="college-name">{college.name}</h2>
                <div className="college-meta">
                  <span className="college-type">{college.type}</span>
                  <div className="college-location">
                    <span className="location-icon">📍</span>
                    <span>
                      {college.location.city}, {college.location.state}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="college-rating">
              {college.rating}
              <span className="rating-value">{college.rating}</span>
            </div>

            <div className="college-courses">
              <p className="courses-label">Popular courses:</p>
              <div className="courses-tags">
                {college.popularCourses.map((course, index) => (
                  <span key={index} className="course-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="college-actions">
              <button
                className="view-details-button"
              >
                View Details
              </button>
              <button
                className="connect-button"
              >
                Connect with a Student
              </button>
            </div>
          </div>
        ))}
      </div>
  )
}

  


export default CollegeCard
