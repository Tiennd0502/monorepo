import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { TamaguiProvider } from '@monorepo/provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <TamaguiProvider>
        <App />
      </TamaguiProvider>
    </BrowserRouter>
  </StrictMode>
);
