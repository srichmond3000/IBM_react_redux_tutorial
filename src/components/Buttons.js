import React from 'react';
import PropTypes from 'prop-types';

import * as types from '../actions/actionTypes';

const Buttons = ({ go, caution, stop, lightStatus }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={go}
        disabled={lightStatus === types.GO || lightStatus === types.CAUTION}
        style={{ cursor: 'pointer' }}>
        Go
      </button>
      <button onClick={caution}
        disabled={lightStatus === types.STOP || lightStatus === types.CAUTION}
        style={{ cursor: 'pointer' }}>
        Caution
      </button>
      <button onClick={stop}
        disabled={lightStatus === types.GO || lightStatus === types.STOP}
        style={{ cursor: 'pointer' }}>
        Stop
      </button>
    </div>
  );
};

Buttons.propTypes = {
  go: PropTypes.func.isRequired,
  caution: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  lightStatus: PropTypes.string.isRequired
};

export default Buttons;