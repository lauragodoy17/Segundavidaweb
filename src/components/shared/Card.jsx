import React from "react";

const Card = (props) => {
  const { img, description, price, inventory, onAddToCart } = props;

  // Función para manejar la adición al carrito
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ img, description, price, inventory });
    }
  };

  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
      <img
        src={img}
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
        alt={description}
      />
      <p className="text-xl">{description}</p>
      <span className="text-gray-400">${price}</span>
      <p className="text-gray-600">{inventory} Bowls available</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Obtenlo
      </button>
    </div>
  );
};

export default Card;

