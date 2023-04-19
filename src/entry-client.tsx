import React from 'react';
import AppRouter from './AppRouter';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
