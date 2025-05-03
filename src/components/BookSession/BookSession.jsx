import React, { useEffect, useState } from 'react';
import './BookSession.css';
import { db } from '../../firebase';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

const BookSession = ({ mentor }) => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedTimes, setBookedTimes] = useState([]);
  const [isBooking, setIsBooking] = useState(false);


  useEffect(() => {
    const generateDates = () => {
      const today = new Date();
      const nextMonday = new Date(today);
    
      const day = today.getDay();
      const diff = day === 0 ? 1 : 8 - day; 
      nextMonday.setDate(today.getDate() + diff);
    
      const dateArray = [];
      for (let i = 0; i < 7; i++) {
        const futureDate = new Date(nextMonday);
        futureDate.setDate(nextMonday.getDate() + i);
    
        const dayName = futureDate.toLocaleString('en-us', { weekday: 'short' });
        const dayNumber = futureDate.getDate();
        const monthName = futureDate.toLocaleString('en-us', { month: 'short' });
    
        dateArray.push({ dayName, dayNumber, monthName });
      }
                 
      setDates(dateArray);
    };
    

    generateDates();
  }, []); 

  const handleDateSelect = async (date) => {
    const fullDate = `${date.dayNumber} ${date.monthName} 2025`;
    setSelectedDate(fullDate);
    setSelectedTime(null);
  
    try {
      const bookingsRef = collection(db, "bookings");
      const q = query(
        bookingsRef,
        where("mentorId", "==", mentor.id),
        where("date", "==", fullDate)
      );
  
      const snapshot = await getDocs(q);
      const times = snapshot.docs.map(doc => doc.data().time);
      setBookedTimes(times);
    } catch (err) {
      console.error("Failed to fetch booked times:", err);
      setBookedTimes([]);
    }
  };
  

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = async () => {
    if (isBooking) return; // prevent multiple calls
    setIsBooking(true); // disable button
  
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time.");
      setIsBooking(false);
      return;
    }
  
    const auth = getAuth();
    const user = auth.currentUser;
    const email = user ? user.email : null;
  
    if (!email) {
      alert("You must be logged in to book a session.");
      setIsBooking(false);
      return;
    }
  
    try {
      const bookingsRef = collection(db, "bookings");
  
      // Check if slot is already booked
      const slotQuery = query(
        bookingsRef,
        where("mentorId", "==", mentor.id),
        where("date", "==", selectedDate),
        where("time", "==", selectedTime)
      );
      const slotSnapshot = await getDocs(slotQuery);
  
      if (!slotSnapshot.empty) {
        alert("This time slot has already been booked. Please select another one.");
        setIsBooking(false);
        return;
      }
  
      // Check user booking frequency
      const userQuery = query(bookingsRef, where("userEmail", "==", email));
      const querySnapshot = await getDocs(userQuery);
  
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
  
        if (diffInDays < 9) {
          alert(`You can only book once every 9 days. Try again after ${9 - diffInDays} day(s).`);
          setIsBooking(false);
          return;
        }
      }
  
      // Add booking
      await addDoc(bookingsRef, {
        mentorId: mentor.id,
        mentorName: mentor.name,
        mentorEmail: mentor.gmail,
        date: selectedDate,
        time: selectedTime,
        userEmail: email,
        createdAt: new Date()
      });
  
      // await fetch("http://localhost:5001/send-confirmation", {
      await fetch("https://backend-mentormap.onrender.com/send-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail: email,
          mentorEmail: mentor.gmail,
          mentorName: mentor.name,
          date: selectedDate, 
          time: selectedTime,
        })
      });
  
      alert("Booking confirmed! Confirmation emails sent.");
    } catch (error) {
      console.error("Error during booking:", error);
      alert("Failed to book session. Try again.");
    } finally {
      setIsBooking(false); // re-enable button
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
      {["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM", "05:00 PM", "06:30 PM"].map((time, index) => {
        const isBooked = bookedTimes.includes(time);
        return (
          <button
            key={index}
            className={`date-option ${selectedTime === time ? 'selected' : ''} ${isBooked ? 'disabled' : ''}`}
            onClick={() => !isBooked && handleTimeSelect(time)}
            disabled={isBooked}
          >
            {time} {isBooked ? "(Booked)" : ""}
          </button>
        );
      })}
      </div>

      <button className="continue-button" onClick={handleBooking} disabled={isBooking}>
  {isBooking ? "Booking..." : "Continue"}
</button>
    </div>
  );
};

export default BookSession;
