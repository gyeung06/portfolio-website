// ClickableArea.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ClickableContainer.css';


const ClickableArea = ({ linkTo, children }) => {
  return (
    <Link to={linkTo} className="clickable-area">
      {children}
    </Link>
  );
};

export default ClickableArea;
