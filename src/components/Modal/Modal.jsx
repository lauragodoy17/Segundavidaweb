import React from "react";
import './Modal.css'
const Modal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg transition-transform transform scale-95 hover:scale-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
        <img
          src={"src/assets/" + product.img}
          className="w-48 h-48 object-cover mx-auto rounded-lg shadow-md mb-4"
          alt="Product"
        />
        <p className="text-gray-700 font-semibold">${product.price}</p>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

