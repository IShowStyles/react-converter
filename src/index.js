import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Layout/App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
