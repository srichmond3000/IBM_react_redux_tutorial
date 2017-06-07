import React from 'react';

import * as types from '../actions/actionTypes';

const stopColour = (state) => {
  return state === types.STOP ? 'red' : 'white';
};

const cautionColour = (state) => {
  return state === types.CAUTION ? 'yellow' : 'white';
};

const goColour = (state) => {
  return state === types.GO ? 'rgb(39, 232, 51)' : 'white';
};

const Stoplight = ({ store }) => {
  const state = store.getState();

  return (
    <div style={{ textAlign: 'center' }}>
      <svg height="170">
        <circle cx="145" cy="60" r="15"
          fill={stopColour(state)}
          stroke="black" />
        <circle cx="145" cy="100" r="15"
          fill={cautionColour(state)}
          stroke="black" />
        <circle cx="145" cy="140" r="15"
          fill={goColour(state)}
          stroke="black" />
      </svg>
    </div>
  );
}

export default Stoplight;