import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { store } from './store';
import 'antd/dist/antd.css';

render(
  <>
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  </>,
  document.getElementById('root')
);
