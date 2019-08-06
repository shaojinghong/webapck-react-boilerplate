/* eslint-disable react/jsx-filename-extension, no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
