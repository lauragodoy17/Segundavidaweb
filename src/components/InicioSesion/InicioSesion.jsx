import React, { useContext, useState,  } from 'react'
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import './InicioSesion.css'
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import api from '../../../Utils/api';


export default function InicioSesion() {
  const [values, setValues] = useState({
    email: '',
    contraseña: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${api}/Inicio`, {
        email: values.email,
        contraseña: values.contraseña
      });

      console.log(response.data);
      if (response.data.Status === "Success") { 
          navigate('/');
      } else {
        setError(response.data.Error || 'Error desconocido');
      }
    } catch (error) {
      setError('Error al intentar iniciar sesión. Verifique sus credenciales.');
      console.log(error)
    }
  };



  return (
<div className="main-wrapper-login">
      <div className="wrapper-login">
          <div className="form-box login">
              <form onSubmit={handleSubmit}>
                  <h1>Inicia sesión</h1>

                  <div className="input-box">
                      <input type="text"
                      placeholder="Correo" 
                      onChange={e => setValues({...values, email: e.target.value})}
                      required/>
                      <IoIosMail className="icon" />
                  </div>

                  <div className="input-box">
                      <input type="password"
                      placeholder="Contraseña"
                      onChange={e => setValues({...values, contraseña: e.target.value})}
                      required/>
                      <FaLock className="icon" />

                    <a className="olvidaste" href='#'>¿Olvidaste tu contraseña?</a>
                  </div>

                  <button type="submit" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" >Iniciar</button>
                  <Link className="olvidaste" to="/RegistroUsuarios">¿No tienes una cuenta? Registrate</Link>

          
              </form>
              {error && <div className="error-message">{error}</div>}

          </div>
      </div>
    </div>   
  );
};