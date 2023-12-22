import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Gabriel Yeung</h1>
    </header>
  );
};

const headerStyle = {
  background: 'black',
  color: 'white',
  textAlign: 'center',
  padding: '10px'
};

export default Header;
