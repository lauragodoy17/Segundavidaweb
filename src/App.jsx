// App.js
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import DropdownMenu from "./components/Dropdown/Dropdown";
import ProductosDAO from "./components/DAO/ProductsDAO";
import { RiMenu3Fill, RiUser3Line, RiAddLine, RiPieChartLine, RiCloseLine } from "react-icons/ri";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

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

  const handleAddToCart = (item) => {
    item.quantity
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} cart={cart} removeFromCart={handleRemoveFromCart} setCart={setCart} />
      
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
          {/* Migas de pan */}
          

          {/* Header */}
          <Header section={1} />

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
            <ProductosDAO onAddToCart={handleAddToCart} numero={1} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
