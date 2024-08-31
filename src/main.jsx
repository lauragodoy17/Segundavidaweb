import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistroUsuarios from './components/RegistroUsuarios/RegistroUsuarios.jsx';
import InicioSesion from './components/InicioSesion/InicioSesion.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/RegistroUsuarios" element={<RegistroUsuarios />} />
        <Route path="/InicioSesion" element={<InicioSesion />} />

      </Routes>
    </Router>
  </React.StrictMode>
);


