import React from "react";
import "./Working.css";
import { Calendar, MessagesSquare, Search } from "lucide-react";

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

function Working() {
  return (
    <section className="working-section">

      <div className="section-header">
        <h1 className="section-title">How this Works ?</h1>
      </div>

      <div className="working-container">
        {steps.map((step, index) => {
          return (
            <div key={index} className="working-card"> 

              <div className="working-profile">

                <div className="symbol-container">
                    {step.symbol}
                </div>

                <h2 className="working-name">{step.name}</h2>

                <p className="working-description">{step.description}</p>


              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default Working;
