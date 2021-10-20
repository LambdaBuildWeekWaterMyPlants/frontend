import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'
import { theme } from './theme'
import './reset.css'
import './index.css'

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
)
