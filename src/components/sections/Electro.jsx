import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
// Components
import Sidebar from "../shared/Sidebar";
import Car from "../shared/Car";
import Header from "../shared/Header";
import DropdownMenu from "../Dropdown/Dropdown";
import ProductosDAO from "../DAO/ProductsDAO";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [cart, setCart] = useState([]); // Estado para el carrito

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  // Función para añadir un producto al carrito
  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Función para eliminar un producto del carrito
  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} cart={cart} removeFromCart={handleRemoveFromCart} />
      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header section={4} />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <Breadcrumbs />
            <h2 className="text-xl text-gray-300">Escoge tus productos</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <DropdownMenu /> 
            </button>
          </div>
          {/* Content */}
          <div>
            {/* Tarjetas de producto */}
            <ProductosDAO onAddToCart={handleAddToCart} numero={4} />
            {/* Agrega más tarjetas si es necesario */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;


