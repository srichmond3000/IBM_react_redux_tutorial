import React from 'react';
import PropTypes from 'prop-types';

import {ButtonContainer} from './ButtonContainer';
import {StoplightContainer} from './StoplightContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <StoplightContainer store={this.props.store} />
        <ButtonContainer store={this.props.store} />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;