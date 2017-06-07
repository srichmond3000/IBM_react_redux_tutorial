import React from 'react';
import PropTypes from 'prop-types';

import * as types from '../actions/actionTypes';

const stopColour = (store) => {
  return store.getState() === types.STOP ? 'red' : 'white';
};

const cautionColour = (store) => {
  return store.getState() === types.CAUTION ? 'yellow' : 'white';
};

const goColour = (store) => {
  return store.getState() === types.GO ? 'rgb(39, 232, 51)' : 'white';
};

class Stoplight extends React.Component {
  componentWillMount() {
    this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <svg height="170">
          <circle cx="145" cy="60" r="15"
            fill={stopColour(this.props.store)}
            stroke="black" />
          <circle cx="145" cy="100" r="15"
            fill={cautionColour(this.props.store)}
            stroke="black" />
          <circle cx="145" cy="140" r="15"
            fill={goColour(this.props.store)}
            stroke="black" />
        </svg>
      </div>
    );
  }
}

Stoplight.propTypes = {
  store: PropTypes.object.isRequired
};

export default Stoplight;