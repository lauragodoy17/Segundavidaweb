import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import api from "../../../Utils/api";
import "./RegistroUsuarios.css"
import { Link } from 'react-router-dom';



export default function RegistroUsuarios() {
    const [values, setValues] = useState({
      usuario: '',
      email: '',
      contraseña: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const validateForm = () => {
      let formErrors = {};
      if (!validateEmail(values.email)) {
        formErrors.email = 'El formato del correo es incorrecto';
      }
      if (values.contraseña.length < 5) {
        formErrors.contraseña = 'La contraseña debe tener al menos 5 caracteres';
      }
      return formErrors;
    };  
    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
          axios.post(`${api}/Registro`, values)
            .then(res => {
              if (res.data.Status === "Success") {
                navigate('segundavidaweb/InicioSesion');
              } else {
                setErrors({ server: "Error en el registro" });
              }
            })
            .catch(err => {
              console.log(err);
              setErrors({ server: "Error en el servidor" });
            });
        } else {
          setErrors(formErrors);
        }
      };   

    return(        
            <div className={'main-wrapper'}>
                <div className="wrapper">
                    <div className="form-box register">
                        <form onSubmit={handleSubmit}>
                            <h1>Registrate</h1>
                            <div className="input-box">
                                <input type="text"
                                placeholder="Usuario" 
                                name="usuario"
                                onChange={e => setValues({...values, usuario: e.target.value})}
                                required/>
                                <FaUserAlt className="icon" />
                                {errors.usuario && <p className="error">{errors.usuaio}</p>}

                            </div>

                            <div className="input-box">
                                <input type="text"
                                placeholder="Correo" 
                                name="email"
                                onChange={e => setValues({...values, email: e.target.value})}
                                required/>
                                <IoIosMail className="icon" />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>

                            <div className="input-box">
                                <input type="password"
                                placeholder="Contraseña" 
                                name="contraseña"
                                onChange={e => setValues({...values, contraseña: e.target.value})}
                                required/>
                                <FaLock className="icon" />
                                {errors.contraseña && <p className="error">{errors.contraseña}</p>}
                            </div>



                            <button className="boton_registro" type="submit">Registrar</button>
                            <Link className="olvidaste" to="segundavidaweb/InicioSesion">¿Ya tienes una cuenta? Inicia sesión</Link>


                            {errors.server && <p className="error">{errors.server}</p>}

                    </form>
                    </div>
                </div>
            </div>
        
    );
};