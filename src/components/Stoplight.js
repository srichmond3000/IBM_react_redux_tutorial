import React from 'react';
import PropTypes from 'prop-types';

const Stoplight = ({ goColor, cautionColor, stopColor }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <svg height="170">
        <circle cx="145" cy="60" r="15"
          fill={stopColor}
          stroke="black" />
        <circle cx="145" cy="100" r="15"
          fill={cautionColor}
          stroke="black" />
        <circle cx="145" cy="140" r="15"
          fill={goColor}
          stroke="black" />
      </svg>
    </div>
  );
};

Stoplight.propTypes = {
  goColor: PropTypes.string.isRequired,
  cautionColor: PropTypes.string.isRequired,
  stopColor: PropTypes.string.isRequired
};

export default Stoplight;