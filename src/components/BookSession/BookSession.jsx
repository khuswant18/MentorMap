import React, { useEffect, useState } from 'react';
import './BookSession.css';
import { db } from '../../firebase';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

const BookSession = ({ mentor }) => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
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

    generateDates();
  }, []);

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
          alert(`You can only book once every 14 days. Try again after ${14 - diffInDays} day(s).`);
          return;
        }
      } 

          await addDoc(bookingsRef, {
            mentorId: mentor.id,
            mentorName: mentor.name,
            mentorEmail: mentor.gmail,  
            date: selectedDate,
            time: selectedTime,
            userEmail: email,
            createdAt: new Date()
          });


      

      alert("Booking confirmed!");
    } catch (error) {
      console.error("Error during booking:", error);
      alert("Failed to book session. Try again.");
    }
  };

  return (
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
        {dates.map((date, index) => {
          const dateString = `${date.dayNumber} ${date.monthName} 2025`;
          return (
            <div
              key={index}
              className={`date-option ${selectedDate === dateString ? 'selected' : ''}`}
              onClick={() => handleDateSelect(date)}
            >
              <div className="day-name">{date.dayName}</div>
              <div className="day-number">{date.dayNumber}</div>
              <div className="month-name">{date.monthName}</div>
            </div>
          );
        })}
      </div>

      <h3 className="time-selection-heading">Select time of day</h3>
      <div className="time-slots">
        {["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM", "05:00 PM", "06:30 PM"].map((time, index) => (
          <button
            key={index}
            className={`date-option ${selectedTime === time ? 'selected' : ''}`}
            onClick={() => handleTimeSelect(time)}
          >
            {time}
          </button>
        ))}
      </div>

      <button className="continue-button" onClick={handleBooking}>Continue</button>
    </div>
  );
};

export default BookSession;
