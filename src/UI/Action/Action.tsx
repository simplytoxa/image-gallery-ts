import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Action.css';

const Action = props => {
  const classNames=[props.className, 'Action'];
  return (
    <FontAwesomeIcon {...props } className={classNames.join(' ')} />
  );
};

export default Action;
