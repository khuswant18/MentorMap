import React from 'react'
import './ExploreColleges.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import SearchBar from '../../components/SearchBar/SearchBar'
import CollegeCard from '../../components/CollegeCard/CollegeCard'

function ExploreColleges() {
  return (
    <div className='explore-college-page'>

        <header className="explore-header">
          <div className="explore-header-container">
          <h1 className='college-heading'>Discover Colleges Across India</h1>
          <p className='college-heading-desc'>Browse through our comprehensive list of colleges and universities. Filter by type, location, and courses to find your perfect match.</p>
          <SearchBar placeholder='Search Colleges...'/>      
          </div>
        </header>

      <div className="explore-content">

        <Sidebar/> 
        
        <div className="explore-college-card"> 
        <h1 className='explore-title'>All Colleges</h1> 
        <CollegeCard/> 
        <CollegeCard/> 
        </div>

      </div>

    </div> 


  )
}

export default ExploreColleges   
