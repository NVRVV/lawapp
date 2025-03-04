import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Create the root only once
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render the application inside the root
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
