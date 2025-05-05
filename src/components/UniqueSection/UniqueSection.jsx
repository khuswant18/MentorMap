import React from 'react'
import './UniqueSection.css'
import { motion } from 'framer-motion'

function UniqueSection() {
  return (
    <section className="unique-section">
          <div className="section-header">
            <h2>
                <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
                              What Makes Us Unique

        
      </motion.div>
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Interactive Career Fit Quiz</h3>
                <p>
                  Our sophisticated AI-driven assessment analyzes your academic strengths, personal interests, and
                  career aspirations to identify optimal educational pathways. The quiz adapts to your responses in
                  real-time, providing increasingly personalized recommendations as you progress.
                </p>
                <a href="#" className="feature-link">
                  Try the Quiz <span>→</span>
                </a>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Best-Fit Branch Recommendations</h3>
                <p>
                  Leveraging data from thousands of successful admissions, our algorithm identifies academic programs
                  that align with your profile. We analyze admission trends, program requirements, and career outcomes
                  to recommend branches where you're most likely to thrive academically and professionally.
                </p>
                <a href="#" className="feature-link">
                  Explore Programs <span>→</span>
                </a>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Real-Time JoSAA Simulation</h3>
                <p>
                  Our proprietary simulation engine models the Joint Seat Allocation Authority (JoSAA) counseling
                  process with remarkable accuracy. Test different ranking strategies, explore seat allocation
                  scenarios, and optimize your choices based on historical data and current trends to maximize your
                  chances of securing your preferred institution.
                </p>
                <a href="#" className="feature-link">
                  Run Simulation <span>→</span>
                </a>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Expert Counselor Access</h3>
                <p>
                  Complement our AI-driven insights with personalized guidance from experienced admissions counselors.
                  Our experts provide strategic advice, application reviews, and interview preparation to give you a
                  competitive edge in the admissions process.
                </p>
                <a href="#" className="feature-link">
                  Meet Our Counselors <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
  )
}

export default UniqueSection
