import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { useIsPhone } from './lib/motion-pref';

// Phones ignore the OS reduce-motion setting (see src/lib/motion-pref.ts).
function Motion({ children }) {
  const phone = useIsPhone();
  return (
    <MotionConfig reducedMotion={phone ? 'never' : 'user'}>
      {children}
    </MotionConfig>
  );
}
import App from './App.jsx';
import '@fontsource-variable/geist';
import '@fontsource-variable/roboto-condensed';
import '@fontsource/fragment-mono';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Motion>
      <App />
    </Motion>
  </BrowserRouter>,
);
