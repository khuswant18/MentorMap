import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';
import BookSession from "../BookSession/BookSession";

const studentData = {
  studentDetails: [
    {
      id: 'mentor1',
      name: "Khuswant Rajpurohit",
      image: '/Student-4.png',
      college: "Newton School of Technology",
      course: "B.Tech",
      branch: "Computer Science",
      year: "1st year",
      rating: { value: 4.8, count: 24 },
      tags: ["Admission Help", "Campus Life", "Internships"],
      bio: "A passionate mentor with experience in the tech industry...",
      availability: {
        days: "Mon, Wed, Fri",
        time: "4:00 PM - 8:00 PM"  
      },
      gmail: "khuswantrajpurohit18@gmail.com" 
    },
    {
      id: 'mentor2',
      name: "Kevish Sewliya",
      image: '/student-1.png',
      college: "Newton School of Technology", 
      course: "B.Tech",
      branch: "Computer Science",
      year: "1st Year",
      rating: { value: 4.8, count: 24 },
      tags: ["Admission Help", "Campus Life", "Internships"],
      bio: "Experienced mentor with a focus on software development...",
      availability: {
        days: "Mon, Wed, Fri",
        time: "4:00 PM - 8:00 PM"
      },
      gmail: "prokevish07@gmail.com"
    },
    {
      id: 'mentor3',
      name: "Krishna Gehlot",
      image: '/student-2.png',
      college: "Newton School of Technology",
      course: "B.Tech",
      branch: "Computer Science",
      year: "1st Year",
      rating: { value: 4.8, count: 24 },
      tags: ["Admission Help", "Campus Life", "Internships"],
      bio: "Experienced mentor with a focus on software development...",
      availability: {
        days: "Mon, Wed, Fri",
        time: "4:00 PM - 8:00 PM"
      },
      gmail: "krishnagehlot936@gmail.com"
    },
    {
      id: 'mentor4',
      name: "Rajat Srivastav",
      image: '/student-3.png',
      college: "Newton School of Technology",
      course: "B.Tech",
      branch: "Computer Science",
      year: "1st Year",
      rating: { value: 4.8, count: 24 },
      tags: ["Admission Help", "Campus Life", "Internships"],
      bio: "Experienced mentor with a focus on software development...",
      availability: {
        days: "Mon, Wed, Fri",
        time: "4:00 PM - 8:00 PM"
      },
      gmail: "Rajatrsrivastav810@gmail.com" 
    }
  ]
};
 
const Profile = () => {
  const { mentorId } = useParams();
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    const foundMentor = studentData.studentDetails.find(
      (mentor) => mentor.id === mentorId
    );
    setMentor(foundMentor);
  }, [mentorId]);

  if (!mentor) return <div>Mentor not found!</div>;

  return (
    <div className="mentor-profile-container">
      <div className="mentor-profile-wrapper">
        <div className="mentor-info-card">
          <div className="mentor-image-container">
            <img src={mentor.image} alt={mentor.name} width={200} height={200} className="mentor-image" />
          </div>
          <h1 className="mentor-name">{mentor.name}</h1>
          <div className="session-details">
            <div className="session-time"><span className="icon">⏱</span>30 mins</div>
            <div className="session-price">Free</div>
          </div>
          <div className="about-section">
            <h2 className="about-heading">About</h2>
            <p className="about-text">{mentor.bio}</p>
          </div> 
        </div>

        <BookSession mentor={mentor}/> 


      </div>
    </div>
  );
};

export default Profile;  