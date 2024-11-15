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
        <Route path="/Segundavidaweb/" element={<App />} />
        <Route path="/Segundavidaweb/Electronica" element={<App />} />
        <Route path="/Segundavidaweb/RegistroUsuarios" element={<RegistroUsuarios />} />
        <Route path="/Segundavidaweb/InicioSesion" element={<InicioSesion />} />
        <Route path='/Segundavidaweb/Notificaciones' element={<Notificaciones />} />
        <Route path='/Segundavidaweb/Perfil' element={<Perfil />} />
        <Route path='/Segundavidaweb/Ofertas' element={<Ofertas />} />
        <Route path='/Segundavidaweb/Electrodomesticos' element={<Electro />} />
        <Route path='/Segundavidaweb/hogar' element={<Hogars />} />
        <Route path='/Segundavidaweb/juguetes' element={<Juguetes />} />
        <Route path='/Segundavidaweb/Libros' element={<Libros />} />
        <Route path='/Segundavidaweb/Muebles' element={<Muebles />} />
        <Route path='/Segundavidaweb/Ropa' element={<Ropa />} />
        <Route path='/Segundavidaweb/Pago' element={<Pago />} />
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



