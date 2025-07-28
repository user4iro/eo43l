import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Verifica si el usuario ya pasó por el prelanding
const acceso = new URLSearchParams(window.location.search).get("acceso");

// Si viene del prelanding, entra al sitio React
if (acceso === "true") {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Si NO viene del prelanding, lo manda al prelanding
  window.location.href = "/prelanding.html";
}
