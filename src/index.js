import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';

const rootElement = document.getElementById('root');

const jsx = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(
  jsx,
  rootElement
);