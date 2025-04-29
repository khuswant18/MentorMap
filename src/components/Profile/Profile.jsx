import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';
import { db } from '../../firebase'; 
import { getAuth } from 'firebase/auth'; 
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const studentData = {
  studentDetails: [
    {
      id: 'mentor1',
      name: "Khuswant Rajpurohit",
      image: '/Student-4.png',
      college: "Newton School of Technology",
      course: "B.Tech",
      branch: "Computer Science ",
      year: "1st year",
      rating: { value: 4.8, count: 24 },
      tags: ["Admission Help", "Campus Life", "Internships"],
      bio: "A passionate mentor with experience in the tech industry...",
      availability: {
        days: "Mon, Wed, Fri",
        time: "4:00 PM - 8:00 PM"
      }
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
      }
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
      }
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
      }
    }
  ]
};

const Profile = () => {
  const { mentorId } = useParams(); 
  const [mentor, setMentor] = useState(null);
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    const foundMentor = studentData.studentDetails.find(
      (mentor) => mentor.id === mentorId
    );
    setMentor(foundMentor);
    generateDates();
  }, [mentorId]);

  const generateDates = () => {
    const today = new Date();
    const dateArray = [];

    for (let i = 0; i < 7; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);

      const dayName = futureDate.toLocaleString('en-us', { weekday: 'short' });
      const dayNumber = futureDate.getDate();
      const monthName = futureDate.toLocaleString('en-us', { month: 'short' });

      dateArray.push({ dayName, dayNumber, monthName });
    }
    setDates(dateArray);
  };

  const handleDateSelect = (date) => {
    const fullDate = `${date.dayNumber} ${date.monthName} 2025`;
    setSelectedDate(fullDate);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time.");
      return;
    }
  
    const auth = getAuth();
    const user = auth.currentUser;
    const email = user ? user.email : null;
  
    if (!email) {
      alert("You must be logged in to book a session.");
      return;
    }
  
    try {
      const bookingsRef = collection(db, "bookings");
      const q = query(bookingsRef, where("userEmail", "==", email));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const bookings = querySnapshot.docs.map(doc => doc.data());
  
        const latestBooking = bookings.reduce((latest, current) => {
          return new Date(current.createdAt.seconds * 1000) > new Date(latest.createdAt.seconds * 1000)
            ? current
            : latest;
        });
  
        const lastBookingDate = new Date(latestBooking.createdAt.seconds * 1000);
        const now = new Date();
        const diffInDays = Math.floor((now - lastBookingDate) / (1000 * 60 * 60 * 24));
  
        if (diffInDays < 14) {
          alert(`You can only book a session once every 14 days. Please try again after ${14 - diffInDays} day(s).`);
          return;
        }
      }
  
      await addDoc(bookingsRef, {
        mentorId: mentor.id,
        mentorName: mentor.name,
        date: selectedDate,
        time: selectedTime,
        userEmail: email,
        createdAt: new Date()
      });
  
      alert("Booking confirmed!");
    } catch (error) {
      console.error("Error checking or saving booking:", error);
      alert("Failed to process booking. Try again.");
    }
  };

  if (!mentor) {
    return <div>Mentor not found!</div>;
  }

  return (
    <div className="mentor-profile-container">
      <div className="mentor-profile-wrapper">
        <div className="mentor-info-card">
          <div className="mentor-image-container">
            <img
              src={mentor.image}
              alt={mentor.name}
              width={200}
              height={200}
              className="mentor-image"
            />
          </div>

          <h1 className="mentor-name">{mentor.name}</h1>

          <div className="session-details">
            <div className="session-time">
              <span className="icon">⏱</span>30 mins
            </div>
            <div className="session-price">Free</div>
          </div>

          <div className="about-section">
            <h2 className="about-heading">About</h2>
            <p className="about-text">{mentor.bio}</p>
          </div>
        </div>

        <div className="scheduling-card">
          <h2 className="scheduling-heading">When should we meet?</h2>

          <div className="month-navigation">
            <button className="nav-button">←</button>
            <div className="month-display">
              <span className="calendar-icon">📅</span>
              April - May 2025
            </div>
            <button className="nav-button">→</button>
          </div>

          <div className="date-selection">
            {dates.map((date, index) => (
              <div
                className={`date-option ${selectedDate === `${date.dayNumber} ${date.monthName} 2025` ? 'selected' : ''}`}
                key={index}
                onClick={() => handleDateSelect(date)}
              >
                <div className="day-name">{date.dayName}</div>
                <div className="day-number">{date.dayNumber}</div>
                <div className="month-name">{date.monthName}</div>
              </div>
            ))}
          </div>

          <h3 className="time-selection-heading">Select time of day</h3>

          <div className="time-slots">
            {["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM", "05:00 PM", "06:30 PM"].map((time, index) => (
              <button
                className={`date-option ${selectedTime === time ? 'selected' : ''}`}
                key={index}
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </button>
            ))}
          </div>

          <button className="continue-button" onClick={handleBooking}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
