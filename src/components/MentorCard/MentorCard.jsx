import React from 'react';
import './MentorCard.css';
import { Calendar, Clock2, MessageCircle, Video } from 'lucide-react';
import { getAuth, onAuthStateChanged, } from 'firebase/auth';  
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const studentData = {
  studentDetails: [
    {
      id: 'mentor1',
      name: "Khuswant Rajpurohit",
      image:'./Student-4.png',
      college: "Newton School of Technology",
      course: "B.Tech", 
      branch: "Computer Science",
      year: "1st year",
      rating: { value: 4.8, count: 24 },
      tags: ["Admission Help", "Campus Life", "Internships"],
      availability: {
        days: "Mon, Wed, Fri",
        time: "4:00 PM - 8:00 PM"
      },
      price: 'Free'          
    },

    { 
        id: 'mentor2',
        name: "Kevish Sewliya",
        image:'./student-1.png',
        college: "Newton School of Technology",
        course: "B.Tech",
        branch: "Computer Science",
        year: "1st Year",
        rating: { value: 4.8, count: 24 },
        tags: ["Admission Help", "Campus Life", "Internships"],
        availability: {
          days: "Mon, Wed, Fri",
          time: "4:00 PM - 8:00 PM"
        },
        price: 'Free'
      },
      {
        id: 'mentor3',
        name: "Krishna Gehlot",
        image:'./student-2.png',
        college: "Newton School of Technology",
        course: "B.Tech",
        branch: "Computer Science",
        year: "1st Year",
        rating: { value: 4.8, count: 24 },
        tags: ["Admission Help", "Campus Life", "Internships"],
        availability: {
          days: "Mon, Wed, Fri",
          time: "4:00 PM - 8:00 PM"
        },
        price: 'Free'
      },

      {
        id: 'mentor4',
        name: "Rajat Srivastav",
        image:'./student-3.png',
        college: "Newton School of Technology",
        course: "B.Tech",
        branch: "Computer Science",
        year: "1st Year",
        rating: { value: 4.8, count: 24 },
        tags: ["Admission Help", "Campus Life", "Internships"],
        availability: {
          days: "Mon, Wed, Fri",
          time: "4:00 PM - 8:00 PM"
        },
        price: 'Free'
      },



  ]
};

const MentorCard = () => {

  const [user,setuser] = useState(null)
  const navigate = useNavigate()
  const auth = getAuth()


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser); 
    });
    return () => unsubscribe();
  }, [auth]); 


  const handleJoinCall = (mentorId) => {
    if (user) {
      navigate(`/profile/${mentorId}`); 
    } else { 
      navigate("/auth");
    }
  };


  return (
    <div className="student-cards">

      {studentData.studentDetails.map((student, index) => (
        <div className="student-card" key={index}>

          <div className="student-left">
            <img src={student.image} alt={student.name} className="student-avatar" />
            <h3 className="student-name">{student.name}</h3>
            <div className="student-rating">
              <span className="rating-star">★</span>
              <span className="rating-value">{student.rating.value}</span>
              <span className="rating-count">({student.rating.count})</span>
            </div>
          </div>

          <div className="student-middle">
            <div className="detail-label">College</div>
            <div className="detail-value">{student.college}</div>

            <div className="detail-grid">
              <div>
                <div className="detail-label">Course</div>
                <div className="detail-value">{student.course}</div>
              </div>
              <div>
                <div className="detail-label">Branch</div>
                <div className="detail-value">{student.branch}</div>
              </div>
              <div>
                <div className="detail-label">Year</div>
                <div className="detail-value">{student.year}</div>
              </div>
            </div>

            <div className="tags">
              {student.tags.map((tag, index) => (
                <span className="tag" key={index}>{tag}</span>
              ))}
            </div>

            <div className="availability">
              <div className="availability-item">
                <Calendar width="16" height="16" />
                Available: {student.availability.days}
              </div>
              <div className="availability-item">
                <Clock2 className="availability-icon" width="16" height="16"/>
                {student.availability.time}
              </div>
            </div>
          </div>

          <div className="student-right">
            <div className="price">
              <div className="price-value">₹{student.price}</div>
              <div className="price-label">per session</div>
            </div>
            <div className="action-buttons">
              <button className="btn btn-primary">
                <MessageCircle className="btn-icon" width="20" height="20"/>
                Chat
              </button>
              <button className="btn btn-outline" onClick={()=>handleJoinCall(student.id)}>
                <Video className="btn-icon" width="20" height="20"/>
                Video Call
              </button>
            </div>
          </div>
            


        </div>
      ))}

    </div>
  );
};

export default MentorCard;
