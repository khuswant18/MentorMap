import React , {useState} from 'react'
import './MentorSection.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import MentorCard from '../../components/MentorCard/MentorCard'

function MentorSection() {
  const [searchTerm, setSearchTerm] = useState('');

 
  return ( 

    <div className='explore-mentor-page'>

    <header className="explore-header">
              <div className="explore-header-container">
              <h1 className='college-heading'>Connect with College Students</h1>
              <p className='college-heading-desc'>Get authentic insights and guidance from current students. Chat, video call, and learn from their experiences.</p>
              <SearchBar placeholder='Search student by name, college ,or course...' onSearch = {(value) => setSearchTerm(value)}/>      
              </div> 
    </header>

    <div className="explore-content">

        <Sidebar/> 
        
        <div className="explore-college-card"> 
        <h1 className='explore-mentor-title'>All Student</h1> 
          <MentorCard searchTerm={searchTerm}/>
        </div> 

      </div>
 

      
    </div>
  )
}

export default MentorSection 
