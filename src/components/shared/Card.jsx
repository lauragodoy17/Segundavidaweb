import React, { useState } from "react";
import Modal from "../Modal/Modal";

const Card = ({ product, onAddToCart }) => {
  const { img, description, price, inventory, name, faction } = product;
  const quantity=0;

  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setModalOpen] = useState(false);

  // Función para manejar la adición al carrito
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ img, description, price, inventory, quantity});
    }
  };

  // Función para abrir el modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
        <img
          src={"src/assets/" + img}
          className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full cursor-pointer"
          alt="Product Image"
          onClick={handleOpenModal} // Abre el modal al hacer clic en la imagen
        />
        <p className="text-xl cursor-pointer" onClick={handleOpenModal}>{name}</p> {/* Abre el modal al hacer clic en el nombre */}
        <span className="text-gray-400">${price}</span>
        <p className="text-gray-600">{description} </p>
        <button
          onClick={handleAddToCart}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Obtenlo
        </button>
      </div>

      {/* Modal para mostrar información del producto */}
      {isModalOpen && (
        <Modal product={product} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Card;






