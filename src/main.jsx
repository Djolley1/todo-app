import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { SettingsProvider } from './Components/Context/SettingsContext.jsx';
import { LoginProvider } from './Components/auth/context.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizedCSS>
      <LoginProvider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </LoginProvider>
    </MantineProvider>
  </React.StrictMode>
);