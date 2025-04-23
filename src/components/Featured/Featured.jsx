import React from "react";
import "./Featured.css";
import TopMentorCard from "../TopMentorCard/TopMentorCard";
import CollegeCard from "../CollegeCard/CollegeCard";


function Featured() {
  return ( 
    <>
    <TopMentorCard/>

    <section className="featured-colleges-section">

      <div className="section-header">
        <h1 className="section-title">Featured Colleges</h1>
      </div>
      
      <CollegeCard/>

    </section>
    </>
  );
}

export default Featured;    
