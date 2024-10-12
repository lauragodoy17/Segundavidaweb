import React from 'react';
import { RiUser3Line, RiShoppingCartLine, RiMessage3Line } from 'react-icons/ri';
import Sidebar from '../shared/Sidebar';

const Perfil = () => {
  // Ejemplo de datos
  const userData = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    phone: '+123 456 789',
    address: 'Calle Ejemplo 123, Ciudad',
    joinedDate: '2022-01-15',
  };

  const salesData = [
    { id: 1, item: 'Laptop', date: '2024-09-20', amount: '$800' },
    { id: 2, item: 'Teléfono', date: '2024-09-25', amount: '$300' },
    { id: 3, item: 'Tablet', date: '2024-10-01', amount: '$400' },
  ];

  const commentsData = [
    { id: 1, comment: 'Excelente vendedor, muy confiable.', rating: 5 },
    { id: 2, comment: 'El producto llegó en perfectas condiciones.', rating: 4 },
    { id: 3, comment: 'Todo bien, aunque tardó un poco en llegar.', rating: 4 },
  ];

  return (
    <div className="container mx-auto p-6 bg-[#1F1D2B] min-h-screen">
        <Sidebar/>
      <h1 className="text-4xl font-bold text-center mb-8 text-[#ec7c6a]">Perfil</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sección de Datos de la Persona */}
        <div className="bg-[#262837] shadow-lg rounded-lg p-6 max-w-xs mx-auto">
          <h2 className="text-2xl font-semibold flex items-center mb-4 text-[#ec7c6a]">
            <RiUser3Line className="mr-2 text-2xl" />
            Datos Personales
          </h2>
          <p className="text-gray-300"><strong>Nombre:</strong> {userData.name}</p>
          <p className="text-gray-300"><strong>Correo:</strong> {userData.email}</p>
          <p className="text-gray-300"><strong>Teléfono:</strong> {userData.phone}</p>
          <p className="text-gray-300"><strong>Dirección:</strong> {userData.address}</p>
          <p className="text-gray-300"><strong>Fecha de Registro:</strong> {userData.joinedDate}</p>
        </div>

        {/* Sección de Ventas */}
        <div className="bg-[#262837] shadow-lg rounded-lg p-6 max-w-xs mx-auto">
          <h2 className="text-2xl font-semibold flex items-center mb-4 text-[#ec7c6a]">
            <RiShoppingCartLine className="mr-2 text-2xl" />
            Ventas
          </h2>
          <ul>
            {salesData.map(sale => (
              <li key={sale.id} className="border-b py-2 text-gray-300">
                <div>
                  <strong>{sale.item}</strong> - <span className="text-gray-500">{sale.date}</span> 
                  <span className="ml-2 text-[#ec7c6a]">{sale.amount}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Sección de Comentarios */}
        <div className="bg-[#262837] shadow-lg rounded-lg p-6 max-w-xs mx-auto">
          <h2 className="text-2xl font-semibold flex items-center mb-4 text-[#ec7c6a]">
            <RiMessage3Line className="mr-2 text-2xl" />
            Comentarios
          </h2>
          <ul>
            {commentsData.map(comment => (
              <li key={comment.id} className="border-b py-2 text-gray-300">
                <div>
                  "{comment.comment}" - 
                  <span className="text-yellow-500 ml-2">⭐{comment.rating}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Perfil;


