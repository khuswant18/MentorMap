import React from 'react'
import './CollegeSection.css'
import CollegeSectionCard from '../../components/CollegeSectionCard/CollegeSectionCard'
import CollegeSectionHeader from '../../components/CollegeSectionHeader/CollegeSectionHeader'

function CollegeSection() {
  return (
    <div>
      <CollegeSectionHeader/>
      <CollegeSectionCard/>
    </div>
  )
}

export default CollegeSection
