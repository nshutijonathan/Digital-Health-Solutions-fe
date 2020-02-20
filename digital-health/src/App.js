import React, { Component } from 'react';
import Routes from './components/routes';

import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  state = {
    users: []
  };

  render() {
    return <Routes />;
  }
}
export default App;
