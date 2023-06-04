import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StyleProvider } from '@ant-design/cssinjs';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StyleProvider hashPriority="high">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StyleProvider>,
);
