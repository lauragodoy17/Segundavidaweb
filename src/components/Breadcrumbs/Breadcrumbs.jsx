import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation(); // Obtiene la ubicación actual
  const pathnames = location.pathname.split('/').filter((x) => x); // Divide el pathname en partes

  // Convierte las rutas de la URL en nombres legibles
  const pathToName = (path) => {
    const names = {
      "RegistroUsuarios": "Registro de Usuarios",
      "InicioSesion": "Inicio de Sesión",
      "Ofertas": "Ofertas",
      "Electro": "Electrónica",
      "hogar": "Hogar",
      "juguetes": "Juguetes",
      "Libros": "Libros",
      "Muebles": "Muebles",
      "Ropa": "Ropa",
      "Pago": "Pago",
      "Carrito": "Carrito"
    };
    return names[path] || path.charAt(0).toUpperCase() + path.slice(1);  // Valor por defecto
  };

  return (
    <nav aria-label="breadcrumb" className="py-2 px-4 bg-gray-800 text-gray-200">
      <ol className="flex space-x-4">
        {/* Enlace de Inicio - Redirige a la página principal (por ejemplo, '/') */}
        <li>
          <Link to="/" className="text-gray-400 hover:text-orange-500">
          </Link>
        </li>

        {/* Recorrer las partes de la ruta y mostrarlas */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <li key={to} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span> {/* Separador entre los elementos */}
              <Link
                to={to}
                className={`text-gray-400 hover:text-orange-500 ${
                  location.pathname === to ? 'text-orange-500' : ''
                }`}
              >
                {pathToName(value)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;






