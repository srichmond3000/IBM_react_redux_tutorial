import React from 'react';
import PropTypes from 'prop-types';

import Buttons from './Buttons';
import Stoplight from './Stoplight';

class App extends React.Component {
  render() {
    return (
      <div>
        <Stoplight store={this.props.store} />
        <Buttons store={this.props.store} />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;