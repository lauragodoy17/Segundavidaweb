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
import Carrito from './components/Carrito/Carrito.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/RegistroUsuarios" element={<RegistroUsuarios />} />
        <Route path="/InicioSesion" element={<InicioSesion />} />
        <Route path='Notificaciones' element={<Notificaciones/>}/>
        <Route path='Perfil' element={<Perfil/>}/>
        <Route path='Ofertas' element={<Ofertas/>}/>
        <Route path='Electro' element={<Electro/>}/>
        <Route path='hogar' element={<Hogars/>}/>
        <Route path='juguetes' element={<Juguetes/>}/>
        <Route path='Libros' element={<Libros/>}/>
        <Route path='Muebles' element={<Muebles/>}/>
        <Route path='Ropa' element={<Ropa/>}/>
        <Route path='Pago' element={<Pago/>}/>
        <Route path='Carrito' element={<Carrito/>}/>

      </Routes>
    </Router>
  </React.StrictMode>
);


