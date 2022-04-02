import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './App';

const rootElement: Element | null = document.getElementById('root');

if (rootElement) {
  const root = ReactDOMClient.createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
