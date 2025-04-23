import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Featured from '../../components/Featured/Featured'
import Guide from '../../components/Guide/Guide'

const Home = () => {
  return (
    <div>
      <Hero/> 
      <Featured/>
      <Guide/> 
    </div> 
  )
}

export default Home 
 