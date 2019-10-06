import React from 'react';
import { render } from 'react-dom'
import App from './app/app';
//** redux init */
import { Provider } from 'react-redux'
import createStore from './app/redux/store'
//** styles */
import './index.css';

const store = createStore()
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
