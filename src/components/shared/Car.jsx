import React from "react";
import './Carrito.css';
import { RiCloseLine } from "react-icons/ri";
import ActionButtons from "../ActionButtons";
import productImage from "../../assets/computador.jpg";
import { Link } from "react-router-dom";

const Car = ({ showOrder, setShowOrder, cart, setCart }) => {
  // Función para añadir cantidad
  const handleAdd = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    console.log("Cart after add:", updatedCart);
  };

  // Función para restar cantidad, sin reducir a menos de 1
  const handleSubtract = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
      console.log("Cart after subtract:", updatedCart);
    }
  };

  // Función para eliminar un producto del carrito
  const handleRemove = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    console.log("Cart after remove:", updatedCart);
  };

  // Calcular el subtotal multiplicando precio unitario por cantidad
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        showOrder ? "right-0" : "-right-full"
      }`}
    >
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4">Tu carrito</h1>

        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Cant</h5>
            <h5>Precio</h5>
          </div>
          <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll scrollbar-custom">
            {cart.length === 0 ? (
              <p className="text-gray-400">El carrito está vacío</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Descripción del producto */}
                    <div className="col-span-4 flex items-center gap-3">
                      <div>
                        <h5 className="text-sm">{item.description}</h5>
                        <p className="text-xs text-gray-500">${item.price}</p>
                      </div>
                    </div>
                    {/* Cantidad */}
                    <div>
                      <span>{item.quantity}</span>
                    </div>
                    {/* Precio Total por Producto */}
                    <div>
                      <span>${(item.price * item.quantity)}</span>
                    </div>
                  </div>
                  {/* Botones de Acción */}
                  <ActionButtons
                    onAdd={() => handleAdd(index)}
                    onSubtract={() => handleSubtract(index)}
                    onRemove={() => handleRemove(index)}
                  />
                </div>
              ))
            )}
          </div>
        </div>
        {/* Sección de Pago */}
        <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Descuento</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Subtotal</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <div>
            <Link to="segundavidaweb/carrito">
              <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
                Continuar con el pago
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
