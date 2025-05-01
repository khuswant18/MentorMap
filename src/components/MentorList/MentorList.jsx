import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // adjust path as needed
import './MentorList.css'

const MentorList = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      const querySnapshot = await getDocs(collection(db, 'bookings'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMentors(data); 
    };
 
    fetchMentors(); 
  }, []);

  return (
    <div>
      {mentors.map(mentor => (
        <div key={mentor.id} className='ma'>
          <h3>{mentor.mentorEmail}</h3>
          <p>{mentor.userEmail}</p>
        </div>
      ))}
    </div> 
  );
};

export default MentorList;
