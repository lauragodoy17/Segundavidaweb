// import React, { createContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; 

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   const login = async (credentials) => {
//     try {
//       const response = await axios.post(`${api}/Inicio`, credentials);
//       setUser(response.data.user);
//       setIsAuthenticated(true);
//       navigate('/'); 
//     } catch (error) {
//       console.error('Error al iniciar sesión:', error);
//     }
//   };

//   // Función para cerrar sesión
//   const logout = async () => {
//     try {
//       await axios.post(`${api}/logout`);
//       setUser(null);
//       setIsAuthenticated(false);
//       navigate('/InicioSesion'); 
//     } catch (error) {
//       console.error('Error al cerrar sesión:', error);
//     }
//   };

//   const checkAuth = async () => {
//     try {
//       const response = await axios.get(`${api}/verifyUser`);
//       if (response.data.isAuthenticated) {
//         setUser(response.data.user);
//         setIsAuthenticated(true);
//       } else {
//         setIsAuthenticated(false);
//       }
//     } catch (error) {
//       console.error('Error al verificar autenticación:', error);
//       setIsAuthenticated(false);
//     }
//   };

//   useEffect(() => {
//     checkAuth();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
