import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from 'routes';

import Hello from 'components/Hello';
import logo from 'assets/logo.svg';
import './App.scss';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo shake-rotate" alt="logo" />
    </div>
    <Hello msg="Hello World!" />
    <Router>{renderRoutes(routes)}</Router>
  </div>
);

export default App;
