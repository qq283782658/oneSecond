import React from 'react';
// import Layout from './views/Authority/Layout';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom'
import RouterConfig from '@/router';
import Auth from './auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <Auth>
        <RouterConfig />
      </Auth>
    </BrowserRouter>
  );
}
export default App;
