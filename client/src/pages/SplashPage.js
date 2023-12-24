import React, { useState, useEffect, useCallback  } from 'react';
import './SplashPage.css';
import ClickableContainer from '../components/FourPanels/ClickableContainer'


const SplashPage = ({ onEnterComplete }) => {
  const [animate, setAnimate] = useState(false);

  const handleEnter = useCallback(() => {
    if (!animate) {
      setAnimate(true);
      onEnterComplete();
    }
  }, [animate, onEnterComplete]);

  useEffect(() => {
    const onWheel = (e) => {
      if (e.deltaY > 0) {
        handleEnter();
      }
    };

    window.addEventListener('wheel', onWheel);
    return () => window.removeEventListener('wheel', onWheel);
  }, [animate, handleEnter]); // Add handleEnter to the dependency array

  return (
    <div className='parent-container'>
        <div className={`splash-container ${animate ? 'fade-out' : ''}`} onClick={handleEnter}>
        </div>
        <div className='next-page-container'>
            <ClickableContainer/>
        </div>
    </div>
  );
};

export default SplashPage;
