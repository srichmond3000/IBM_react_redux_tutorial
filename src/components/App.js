import React from 'react';

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

export default App;