import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './app/app';
import rootReducer from './app/redux/reducers'


render(
    <App />,
  document.getElementById('root')
)
