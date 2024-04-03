// Fireworks.js
import React from 'react';
import './fireworks.css';

const Fireworks = () => {
    return (
      <div style={{
        position: 'fixed', // Use fixed positioning to cover the whole viewport
        top: 0,
        left: 0,
        width: '100vw', // 100% of the viewport width
        height: '100vh', // 100% of the viewport height
        zIndex: 1000, // Ensure it's above everything else
        pointerEvents: 'none', // Allows clicks to pass through to elements underneath
      }} className="pyro">
        <div className="before"></div>
        <div className="after"></div>
      </div>
    );
  };

export default Fireworks;