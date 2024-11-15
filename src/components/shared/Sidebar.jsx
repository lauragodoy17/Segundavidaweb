import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import {
  RiHome6Line,
  RiNotification3Line,
  RiAccountCircleFill,
  RiPriceTag3Fill,
  RiLogoutCircleRLine,
} from "react-icons/ri";
import api from '../../../Utils/api';

const Sidebar = (props) => {
  const { showMenu } = props;
  const [auth, setAuth] = useState(false);
  const [contraseña, setContraseña] = useState(' ');
  const navigate = useNavigate();
  const location = useLocation(); // Obtener la ubicación actual

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get(`${api}`)
      .then(res => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setContraseña(res.data.contraseña);
        } else {
          setAuth(false);
          navigate('segundavidaweb/InicioSesion');
        }
      })
      .catch(err => console.log(err));
  }, [navigate]);

  const handleDelete = () => {
    axios.get(`${api}/logout`)
      .then(res => {
        setAuth(false);
        navigate('/segundavidaweb/InicioSesion');
      })
      .catch(err => console.log(err));
  };

  // Comprobar si estamos en la ruta de notificaciones, home, perfil u ofertas
  const isActiveNotification = location.pathname === 'segundavidaweb/notificaciones';
  const isActiveHome = location.pathname === 'segundavidaweb/Electronica'; // Suponiendo que la ruta de inicio es "/"
  const isActiveProfile = location.pathname === 'segundavidaweb/perfil'; // Ruta del perfil
  const isActiveOffers = location.pathname === 'segundavidaweb/ofertas'; // Ruta de ofertas

  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">Logo</h1>
          </li>
          <li className="p-4 rounded-tl-xl rounded-bl-xl bg-[#1F1D2B]"> {/* Color uniforme */}
            <Link
              to="/segundavidaweb/Electronica"
              className={`p-4 flex justify-center rounded-xl transition-colors ${isActiveHome ? 'text-white' : 'text-[#ec7c6a]'}`}
            >
              <RiHome6Line className={`text-2xl ${isActiveHome ? 'text-white' : 'text-[#ec7c6a]'}`} />
            </Link>
          </li>

          <li className="p-4 rounded-tl-xl rounded-bl-xl bg-[#1F1D2B]"> {/* Color uniforme */}
            <Link
              to="/segundavidaweb/notificaciones"
              className={`p-4 flex justify-center rounded-xl transition-colors ${isActiveNotification ? 'text-white' : 'text-[#ec7c6a]'}`}
            >
              <RiNotification3Line className={`text-2xl ${isActiveNotification ? 'text-white' : 'text-[#ec7c6a]'}`} />
            </Link>
          </li>

          {/* Agregado el botón de perfil con redirección */}
          <li className="p-4 rounded-tl-xl rounded-bl-xl bg-[#1F1D2B]"> {/* Color uniforme */}
            <Link
              to="/segundavidaweb/perfil" // Ruta de la página de perfil
              className={`p-4 flex justify-center rounded-xl transition-colors ${isActiveProfile ? 'text-white' : 'text-[#ec7c6a]'}`}
            >
              <RiAccountCircleFill className={`text-2xl ${isActiveProfile ? 'text-white' : 'text-[#ec7c6a]'}`} />
            </Link>
          </li>

          {/* Añadido el botón de ofertas con redirección */}
          <li className="p-4 rounded-tl-xl rounded-bl-xl bg-[#1F1D2B]"> {/* Color uniforme */}
            <Link
              to="/segundavidaweb/ofertas" // Ruta de la página de ofertas
              className={`p-4 flex justify-center rounded-xl transition-colors ${isActiveOffers ? 'text-white' : 'text-[#ec7c6a]'}`}
            >
              <RiPriceTag3Fill className={`text-2xl ${isActiveOffers ? 'text-white' : 'text-[#ec7c6a]'}`} />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              onClick={handleDelete}
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiLogoutCircleRLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;


