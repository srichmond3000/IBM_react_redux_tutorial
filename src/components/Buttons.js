import React from 'react';
import PropTypes from 'prop-types';

import { go, caution, stop } from '../actions/trafficLightActions';
import * as types from '../actions/actionTypes';

const Buttons = ({ store }) => {
  const state = store.getState();

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={function(){ store.dispatch(go); }}
        disabled={state === types.GO || state === types.CAUTION}
        style={{ cursor: 'pointer' }}>
        Go
      </button>
      <button onClick={function() { store.dispatch(caution); }}
        disabled={state === types.STOP || state === types.CAUTION}
        style={{ cursor: 'pointer' }}>
        Caution
      </button>
      <button onClick={function() { store.dispatch(stop); }}
        disabled={state === types.GO || state === types.STOP}
        style={{ cursor: 'pointer' }}>
        Stop
      </button>
    </div>
  );
};

Buttons.propTypes = {
  store: PropTypes.object.isRequired
};

export default Buttons;