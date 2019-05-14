import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Status.css';

const Status = props => {
  return (
    <div className="Status">
      <FontAwesomeIcon icon="images" />
      <span className="Status__number">{props.filesCount}</span>
    </div>
  );
};

export default Status;