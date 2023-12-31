import React, { useState } from 'react';
import './ClickableContainer.css';

const ClickableArea = ({ children, onEffectTrigger  }) => {
  const [clickPosition] = useState({ x: 0, y: 0, clicked: false });

  // Function to create multiple copies of the text at random heights and start times
 const handleClick = (e) => {
    // Calculate the position relative to the viewport
    const x = e.clientX;
    const y = e.clientY;
    onEffectTrigger(x, y, children);
  };

  return (
    <div className="clickable-area" onClick={handleClick}>
      {clickPosition.clicked && (
        <div
          className="radiate-effect"
          style={{
            left: clickPosition.x,
            top: clickPosition.y,
          }}
        ></div>
      )}
      {children}
    </div>
  );
};

export default ClickableArea;
