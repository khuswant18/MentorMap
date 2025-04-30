import React from 'react'
import './CollegeCard.css'
import { useNavigate } from 'react-router-dom'



const colleges = [ 
  {
    id: 1,
    name: 'Newton School of Technology',
    logo: '/college-1.png',
    type: 'Private',
    location: { city: 'Delhi,NCR', state: 'Haryana' },
    rating: 4.8,
    popularCourses: ['Computer Science', 'Mechanical', 'Electrical'],
    isActive: true
  },
  {
    id: 2,
    name: 'Scaler School of Technology',
    logo: '/college-2.png',
    type: 'Private',
    location: { city: 'Bengaluru', state: 'Karnataka' },
    rating: 4.8,
    popularCourses: ['Computer Science', 'Mechanical', 'Electrical'],
    isActive: false
  },
  {
    id: 3,
    name: 'VIT Vellore',
    logo: '/college-3.png',
    type: 'Private',
    location: { city: 'Vellore', state: 'Tamil Nadu' },
    rating: 4.8,
    popularCourses: ['Computer Science', 'Mechanical', 'Electrical'],
    isActive: false
  },
  {
    id: 4,
    name: 'JAYPEE Noida',
    logo: '/college-4.png',
    type: 'Private',
    location: { city: 'Noida', state: 'UP' },
    rating: 4.8,
    popularCourses: ['Computer Science', 'Mechanical', 'Electrical'],
    isActive: false
  },
]


function CollegeCard() {
  
    const navigate = useNavigate()
  
    function handleClick() {
      navigate('/findmentor')
    }


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
              <span className="rating-value"><span class="rating-star">★</span> {college.rating}</span>
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
                disabled={!college.isActive}
              >
                View Details
              </button>
              <button
                onClick={() => college.isActive && handleClick()}
                className="connect-button"
                disabled={!college.isActive}
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
