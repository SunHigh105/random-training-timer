import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from './containers/App';

import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <BrowserRouter>
    <AppContainer / >
  </BrowserRouter>
  ,
  document.getElementById('root')
);
