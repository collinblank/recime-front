import React from 'react';
import ReactDOM from 'react-dom/client';
//BrowserRouter uses HTML5 history API to keep URL in sync with the view.
import { BrowserRouter } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


