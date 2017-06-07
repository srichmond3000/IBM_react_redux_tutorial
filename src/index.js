import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/App';
import trafficLightReducer from './reducers/trafficLightReducer';

const store = createStore(trafficLightReducer);

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('app')
  );
};

store.subscribe(render);

render();