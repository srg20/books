import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import {BrowserRouter} from 'react-router-dom'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
