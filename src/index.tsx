import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#955ce6',
        colorSuccess: '#54cf27',
        colorInfo: '#955ce6',
        borderRadius: 6,
        wireframe: false,
      },
    }}
  >
    <StyleProvider hashPriority="high">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StyleProvider>
  </ConfigProvider>,
);
