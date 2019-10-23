import React from 'react';
import ReactDOM from 'react-dom';
import AppShell from './Appshell';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>,
  document.getElementById('root')
);
