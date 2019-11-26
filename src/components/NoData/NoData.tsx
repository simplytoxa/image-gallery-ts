import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NoData.css';

const NoData = () => {
  return (
    <div className="NoData">
      <FontAwesomeIcon className="NoData-icon" icon="exclamation-circle" />
      <div>No data available</div>
      <div>Try to drop an image here...</div>
    </div>
  );
};

export default NoData;
