import React from 'react';
import './FloatingCard.css';

function FloatingCard({ position, title,children }) {
  return <div className={`floating-card ${position}`}>
    <div className="floating-card-title">{title}</div>
    <hr />
    <div className="floating-card-content">{children}</div>
    </div>;
}
 
export default FloatingCard; 