import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

import {
  RiHome6Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Line,
  RiLogoutCircleRLine,
  RiProfileFill,
  RiProfileLine,
  RiAccountCircleFill,
  RiPriceTag3Fill,
} from "react-icons/ri";
import api from '../../../Utils/api';
import { Navigate } from 'react-router-dom';

const Sidebar = (props) => {
  const { showMenu } = props;
  const [auth,setAuth]= useState(false);
  const [contraseña, setContraseña]= useState(' ')
  const navigate= useNavigate()


  axios.defaults.withCredentials=true; 


  useEffect(() => {
    axios.get(`${api}`)
        .then(res => {
            if (res.data.Status === "Success") {
                setAuth(true);
                setContraseña(res.data.contraseña);
            } else {
                setAuth(false);
                setMessage(res.data.Error);
                Navigate('/InicioSesion');
            }
        })
        .catch(err => console.log(err)); 
}, []);
const handleDelete = () => {
  axios.get(`${api}/logout`)
      .then(res => {
          setAuth(false); 
          navigate('/InicioSesion'); 
      })
      .catch(err => console.log(err));
};

  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              Logo
            </h1>
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white"
            >
              <RiHome6Line className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiNotification3Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiAccountCircleFill  className="text-2xl" />
            </a>
          </li>
          
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPriceTag3Fill  className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
      <ul className="pl-4">
  <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
    <a
      onClick={
        handleDelete
      }
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
