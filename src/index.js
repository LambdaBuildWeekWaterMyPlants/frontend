import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';

import App from './App'
import { theme } from './theme'
import './reset.css'
import './index.css'

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Router>
  </Provider>
  ,
  document.getElementById('root')
)
