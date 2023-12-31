import React from 'react';
import ClickableArea from './ClickableArea';
import './ClickableContainer.css';

const ClickableContainer = ({ onEffectTrigger }) => {
  return (
    <div className="rectangle-container">
      <div className="overlay-image">
        <img src={`${process.env.PUBLIC_URL}/piccy.jpg`} alt="Descriptive Text" />
      </div>
      <ClickableArea onEffectTrigger={onEffectTrigger}>About Me</ClickableArea>
      <ClickableArea onEffectTrigger={onEffectTrigger}>Photos</ClickableArea>
      <ClickableArea onEffectTrigger={onEffectTrigger}>Links</ClickableArea>
      <ClickableArea onEffectTrigger={onEffectTrigger}>Resume</ClickableArea>
    </div>
  );
};

export default ClickableContainer;
