import { connect } from 'react-redux';

import Buttons from './Buttons';
import { go, caution, stop } from '../actions/trafficLightActions';

const mapStateToProps = state => {
  return {
    lightStatus: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    go: () => { dispatch(go); },
    caution: () => { dispatch(caution); },
    stop: () => { dispatch(stop); }
  };
};

export const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);