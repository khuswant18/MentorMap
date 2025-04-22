import React from 'react'
import './CollegeSectionHeader.css'
import { Search } from 'lucide-react'

function CollegeSectionHeader() {
  return (
    <section className='college-heading'>

      <div className="college-header-container">

        <h1 className='college-heading'>Discover Colleges Across India</h1>

        <p className='college-heading-desc'>Browse through our comprehensive list of colleges and universities. Filter by type, location, and courses to find your perfect match.</p>

        <div className="input-search">

          <div className="input-wrapper"> 

            <Search className='search-icon'/>

            <input className='college-search' type="text" placeholder='Search colleges...'/>

          </div>
          
          <button className='search-button'>Search</button>
        </div>
      </div>
      
    </section>
  )
}


export default CollegeSectionHeader
