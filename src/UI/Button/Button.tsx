import React from 'react';
import './Button.css';

const Button = props => {
  return (
    <button type="button" { ...props }>
      <span className="foreground">{ props.children }</span>
      <span className="background" />
    </button>
  );
};

export default Button;
