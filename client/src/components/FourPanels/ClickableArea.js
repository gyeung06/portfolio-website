// ClickableArea.js
import React from 'react';
import './ClickableContainer.css';


const ClickableArea = ({ linkTo, children }) => {
  return (
    <div className="clickable-area">
      {children}
    </div>
  );
};

export default ClickableArea;
