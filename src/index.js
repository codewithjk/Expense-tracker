import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from './contaxt/contaxt'
import App from './App'
import './index.css'


ReactDOM.render(
  
    <Provider>
      <App/>
    </Provider>,
    document.getElementById('root')
);