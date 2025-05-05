import React from "react";
import "./Guide.css";
import { Calendar, MessagesSquare, Search } from "lucide-react";
import { motion } from 'framer-motion';


const steps = [
  {
    id: "1",
    name: "Find your mentor",
    description: "Search and filter through verified college student based on your interests", 
    symbol: <Search/>,
  },
  {
    id: "2",
    name: "Book a session",
    description: "Schedule a one-on-one call or chat chat at your convenient time", 
    symbol: <Calendar/>
  },
  {
    id: "3",
    name: "Get Guidance",
    description: "Receive personalized advice and insights from experienced college students", 
    symbol: <MessagesSquare />,
  },
];

function Guide() {
  return (
    <section className="working-section">

      <div className="section-header">
        <h1 className="section-title">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        How this Works ?
      </motion.div>
          
        </h1>
      </div>

      <div className="working-container">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="working-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="working-profile">
            <div className="symbol-container">
              {step.symbol}
            </div>

            <h2 className="working-name">{step.name}</h2>

            <p className="working-description">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>

    </section>
  );
}

export default Guide;
