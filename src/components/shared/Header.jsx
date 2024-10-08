import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
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
        <a
          href="#"
          className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
        >
          Electrónica
        </a>
        <a href="#" className="py-2 pr-4">
          Muebles y decoración
        </a>
        <a href="#" className="py-2 pr-4">
          Ropa y accesorios
        </a>
        <a href="#" className="py-2">
          Electrodomésticos
        </a>
        <a href="#" className="py-2">
          Juguetes y juegos
        </a>    
        <a href="#" className="py-2">
          Libros y revistas
        </a>
        <a href="#" className="py-2">
          Hogar y jardín 
        </a>
        <a href="#" className="py-2">
          Ofertas especiales
        </a>
      </nav>
    </header>
  );
};

export default Header;
