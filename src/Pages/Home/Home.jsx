import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Featured from '../../components/Featured/Featured'
import Guide from '../../components/Guide/Guide'
import StorySection from '../../components/StorySection/StorySection'
import UniqueSection from '../../components/UniqueSection/UniqueSection'

const Home = () => {
  return (
    <div>
      <Hero/> 
      <Featured/>
      <StorySection/>
      <UniqueSection/>
      <Guide/>  
    </div> 
  )
}

export default Home 
 