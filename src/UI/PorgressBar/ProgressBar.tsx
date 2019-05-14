import React from 'react';
import './ProgressBar.css';

const ProgressBar = props => {
  return (
    <div>
      <div>{props.progress}%</div>

      <div className="progress">
        <div style={{width: `${props.progress}%`}} className="progress-bar">
          <div className="progress-shadow" />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
