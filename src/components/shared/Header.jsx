import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = ({ section }) => {
  // Clase base para todas las categorías
  const baseClass = "py-2 pr-4";
  // Clase que indica la categoría seleccionada
  const activeClass =
    "relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]";

  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">SegundaVida</h1>
        </div>
        <form>
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
              placeholder="Search"
            />
          </div>
        </form>
        <div className="flex gap-4">
          <Link to="/InicioSesion">
            <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-lg hover:bg-[#e54a40] transition duration-300">
              Inicio de sesión
            </button>
          </Link>
          <Link to="/RegistroUsuarios">
            <button className="bg-[#1F1D2B] text-gray-300 py-2 px-4 rounded-lg border border-gray-500 hover:bg-[#2c2c2c] transition duration-300">
              Registro
            </button>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
        <Link to="/Electrónica" className={section === 1 ? activeClass : baseClass}>
          Electrónica
        </Link>
        <Link to="/Muebles" className={section === 2 ? activeClass : baseClass}>
          Muebles y decoración
        </Link>
        <Link to="/Ropa" className={section === 3 ? activeClass : baseClass}>
          Ropa y accesorios
        </Link>
        <Link to="/Electro" className={section === 4 ? activeClass : baseClass}>
          Electrodomésticos
        </Link>
        <Link to="/Juguetes" className={section === 5 ? activeClass : baseClass}>
          Juguetes y juegos
        </Link>
        <Link to="/Libros" className={section === 6 ? activeClass : baseClass}>
          Libros y revistas
        </Link>
        <Link to="/Hogar" className={section === 7 ? activeClass : baseClass}>
          Hogar y jardín
        </Link>
      </nav>
    </header>
  );
};

export default Header;
