import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistroUsuarios from './components/RegistroUsuarios/RegistroUsuarios.jsx';
import InicioSesion from './components/InicioSesion/InicioSesion.jsx';
import Notificaciones from './components/Notificaciones/Notificaciones.jsx';
import Perfil from './components/Perfil/Perfil.jsx';
import Ofertas from './components/Ofertas/Ofertas.jsx';
import Electro from './components/sections/Electro.jsx';
import Hogars from './components/sections/hogar.jsx';
import Juguetes from './components/sections/juguetes.jsx';
import Libros from './components/sections/libros.jsx';
import Muebles from './components/sections/muebles.jsx';
import Ropa from './components/sections/Ropa.jsx';
import Pago from './components/Pago/Pago.jsx';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs.jsx';

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="segundavidaweb/" element={<App />} />
        <Route path="segundavidaweb/Electronica" element={<App />} />
        <Route path="segundavidaweb/RegistroUsuarios" element={<RegistroUsuarios />} />
        <Route path="segundavidaweb/InicioSesion" element={<InicioSesion />} />
        <Route path='segundavidaweb/Notificaciones' element={<Notificaciones />} />
        <Route path='segundavidaweb/Perfil' element={<Perfil />} />
        <Route path='segundavidaweb/Ofertas' element={<Ofertas />} />
        <Route path='segundavidaweb/Electrodomesticos' element={<Electro />} />
        <Route path='segundavidaweb/hogar' element={<Hogars />} />
        <Route path='segundavidaweb/juguetes' element={<Juguetes />} />
        <Route path='segundavidaweb/Libros' element={<Libros />} />
        <Route path='segundavidaweb/Muebles' element={<Muebles />} />
        <Route path='segundavidaweb/Ropa' element={<Ropa />} />
        <Route path='segundavidaweb/Pago' element={<Pago />} />
      </Routes>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <MainRoutes />
    </Router>
  </React.StrictMode>
);



