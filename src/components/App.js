import React, { Component } from 'react';
import Header from './Layouts/Header';
import { BrowserRouter as Router } from 'react-router-dom';

import '../index.css';
class App extends Component {
  render() {
    return (
      <Router>
        <Header />
      </Router>
    );
  }
}

export default App;
