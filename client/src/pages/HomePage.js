import React, { useState } from 'react';
import ClickableContainer from '../components/FourPanels/ClickableContainer';
import './HomePage.css';

const HomePage = ({ navigateTo }) =>  {
  const [effectProps, setEffectProps] = useState({ x: 0, y: 0, show: false });

  const handleEffectTrigger = (x, y, newSection) => {
    setEffectProps({ x, y, show: true });
    setTimeout(() => {
      setEffectProps({ ...effectProps, show: false });
      navigateTo(newSection)
    }, 1000); // Duration of the animation
  };

  return (
    <div>
      {effectProps.show && <div className="radiate-effect" style={{ left: effectProps.x, top: effectProps.y }}></div>}
      <ClickableContainer onEffectTrigger={handleEffectTrigger} />
    </div>
  );
}

export default HomePage;
