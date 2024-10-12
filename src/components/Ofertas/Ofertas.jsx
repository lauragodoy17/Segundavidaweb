import React from 'react';
import { RiPriceTag3Fill } from 'react-icons/ri';
import Sidebar from '../shared/Sidebar';
import laptopImage from '../../assets/laptop.jpg'; // Cambia la ruta a la correcta
import sofa from '../../assets/sofa.jpg'; // Cambia la ruta a la correcta
import celular1 from '../../assets/celular1.jpeg'; // Cambia la ruta a la correcta
import tenis1 from '../../assets/tenis1.jpg'; // Cambia la ruta a la correcta

const Ofertas = () => {
  // Ejemplo de productos en oferta
  const products = [
    {
      id: 1,
      name: 'Laptop Gamer',
      price: '$1.200.000',
      salePrice: '$900.000',
      image: laptopImage, // Cambia la URL por la de tus imágenes
    },
    {
      id: 2,
      name: 'Teléfono Inteligente',
      price: '$800.000',
      salePrice: '$600.000',
      image: celular1,
    },
    {
      id: 3,
      name: 'Sofa Cama',
      price: '$150.000',
      salePrice: '$100.000',
      image: sofa,
    },
    {
      id: 4,
      name: 'Tenis para hombre',
      price: '$250.000',
      salePrice: '$180.000',
      image: tenis1,
    },
  ];

  return (
    <div className="flex">
      <Sidebar /> {/* Asegúrate de que el Sidebar tenga un ancho fijo */}
      <div className="flex-grow bg-[#1F1D2B] min-h-screen p-6 ml-28"> {/* Ajustar el margen izquierdo */}
        <h1 className="text-4xl font-bold text-center mb-8 text-[#ec7c6a]">Ofertas Especiales</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-[#262837] rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  ¡En Oferta!
                </span>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-[#ec7c6a]">{product.name}</h2>
                <p className="text-gray-300 line-through">{product.price}</p>
                <p className="text-xl font-bold text-[#ec7c6a]">{product.salePrice}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ofertas;


