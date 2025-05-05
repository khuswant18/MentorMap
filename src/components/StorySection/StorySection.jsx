import React from 'react'
import './StorySection.css'
import { motion } from 'framer-motion'

function StorySection() {
  return (
      <section className="testimonials-section">
          <div className="section-header">
            <h2>
            <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
              What Our Students Say
        
      </motion.div>
              
              </h2>
            <div className="section-divider"></div>
          </div>

          <div className="testimonials-container">
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p>
                RankMate's career fit quiz was eye-opening. It helped me discover programs I hadn't considered but that
                perfectly matched my interests. I'm now studying Computer Science at my dream university!
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>AR</span>
                </div>
                <div className="author-info">
                  <h4>Aditya Rao</h4>
                  <p>Computer Science, IIT Bombay</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p>
                The JoSAA simulation was a game-changer for my college selection strategy. It accurately predicted where
                I would get admission, allowing me to make confident choices during counseling.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>SP</span>
                </div>
                <div className="author-info">
                  <h4>Shreya Patel</h4>
                  <p>Electrical Engineering, NIT Trichy</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p>
                As a first-generation college student, I had no idea how to navigate admissions. RankMate provided
                step-by-step guidance that made the entire process manageable and less stressful.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>RK</span>
                </div>
                <div className="author-info">
                  <h4>Rahul Kumar</h4>
                  <p>Mechanical Engineering, BITS Pilani</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default StorySection
