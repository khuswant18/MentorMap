import React from "react";
import "./Featured.css";
import TopMentorCard from "../TopMentorCard/TopMentorCard";
import CollegeCard from "../CollegeCard/CollegeCard";
import { motion } from 'framer-motion';


function Featured() {
  return ( 
    <>
    <TopMentorCard/>

    <section className="featured-colleges-section">


      <div className="section-header">
        <h1 className="section-title">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        Explore Colleges 
      </motion.div>
          </h1>
      </div> 
      
      <CollegeCard/> 

    </section>
    </>
  );
}

export default Featured;    
