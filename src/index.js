import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/App';
import trafficLightReducer from './reducers/trafficLightReducer';

const store = createStore(trafficLightReducer);

ReactDOM.render(
  <App store={createStore(trafficLightReducer)} />,
  document.getElementById('app')
);