import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import MentorCard from '../../components/MentorCard/MentorCard'
import Working from '../../components/Working/Working'

const Home = () => {
  return (
    <div>
      <Hero/> 
      <MentorCard/>
      <Working/>
    </div>
  )
}

export default Home
 