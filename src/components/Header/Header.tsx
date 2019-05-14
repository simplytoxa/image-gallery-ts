import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <header className="Header">
      {props.children}
    </header>
  );
};

export default Header;
