// RectangleLinks.js
import React from 'react';
import ClickableArea from './ClickableArea';
import './ClickableContainer.css';

const ClickableContainer = () => {
  return (
    <div className="rectangle-container">
      <ClickableArea linkTo="/">Top Left</ClickableArea>
      <ClickableArea linkTo="/">Top Right</ClickableArea>
      <ClickableArea linkTo="/">Bottom Left</ClickableArea>
      <ClickableArea linkTo="/">Bottom Right</ClickableArea>
    </div>
  );
};

export default ClickableContainer;
