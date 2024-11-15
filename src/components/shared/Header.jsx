import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Modal from "../Modal/Modal";

const Header = ({ section }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado

  const baseClass = "py-2 pr-4";
  const activeClass = "relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]";

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3080/productos');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Error fetching products');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOpenModal = (product) => {
    setSelectedProduct(product); // Guardar el producto seleccionado
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null); // Limpiar el producto seleccionado al cerrar el modal
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">SegundaVida</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="relative w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
              placeholder="Search"
            />
            {/* Lista de sugerencias */}
            {filteredProducts.length > 0 && (
              <ul className="absolute z-10 bg-[#1F1D2B] w-full border border-gray-300 mt-1 rounded-lg shadow-lg">
                {filteredProducts.map(product => (
                  <li key={product.Id} className="p-2 hover:bg-gray-200 text-gray-300 cursor-pointer border-b border-gray-600 last:border-b-0" onClick={() => handleOpenModal(product)}>
                    {product.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </form>
        <div className="flex gap-4">
          <Link to="segundavidaweb/InicioSesion">
            <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-lg hover:bg-[#e54a40] transition duration-300">
              Inicio de sesión
            </button>
          </Link>
          <Link to="segundavidaweb/RegistroUsuarios">
            <button className="bg-[#1F1D2B] text-gray-300 py-2 px-4 rounded-lg border border-gray-500 hover:bg-[#2c2c2c] transition duration-300">
              Registro
            </button>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
        <Link to="/Electronica" className={section === 1 ? activeClass : baseClass}>
          Electrónica
        </Link>
        <Link to="/Muebles" className={section === 2 ? activeClass : baseClass}>
          Muebles y decoración
        </Link>
        <Link to="segundavidaweb/Ropa" className={section === 3 ? activeClass : baseClass}>
          Ropa y accesorios
        </Link>
        <Link to="segundavidaweb/Electrodomesticos" className={section === 4 ? activeClass : baseClass}>
          Electrodomésticos
        </Link>
        <Link to="segundavidaweb/Juguetes" className={section === 5 ? activeClass : baseClass}>
          Juguetes y juegos
        </Link>
        <Link to="segundavidaweb/Libros" className={section === 6 ? activeClass : baseClass}>
          Libros y revistas
        </Link>
        <Link to="segundavidaweb/Hogar" className={section === 7 ? activeClass : baseClass}>
          Hogar y jardín
        </Link>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <Modal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </header>
  );
};

export default Header;
