import React, { useState } from 'react';
import './Carrito.css'; // Estilos personalizados
import Sidebar from '../shared/Sidebar';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const Carrito = () => {
  const navigate = useNavigate(); // Hook para la navegación

  // Estado con los productos en el carrito
  const [cart, setCart] = useState([
    { id: 1, name: 'Producto 1', price: 50, quantity: 2 },
    { id: 2, name: 'Producto 2', price: 30, quantity: 1 },
    { id: 3, name: 'Producto 3', price: 40, quantity: 3 },
  ]);

  // Función para manejar el proceso de pago y redirigir al método de pago
  const handlePayment = () => {
    Swal.fire({
      title: 'Redirigiendo al pago...',
      text: 'Estás siendo redirigido a la pantalla de pago.',
      icon: 'info',
      timer: 2000, // Tiempo antes de redirigir
      showConfirmButton: false
    }).then(() => {
      navigate('/pago'); // Redirigir a la ruta del método de pago
    });
  };

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container">
      <Sidebar showMenu={true} />
      <div className="content">
        <h1 className="title">Carrito de Compras</h1>
        <p className="description">Revisa los productos en tu carrito antes de proceder al pago.</p>
        
        {/* Mostrar los productos directamente en la pantalla */}
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="cart-empty">El carrito está vacío</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>{item.quantity} x ${item.price}</span>
              </div>
            ))
          )}
        </div>

        {/* Mostrar el total */}
        <div className="cart-total">
          <span>Total:</span>
          <span>${calculateTotal()}</span>
        </div>

        {/* Botón para realizar el pago */}
        <button className="btn" onClick={handlePayment}>
          Pagar Ahora
        </button>
      </div>
    </div>
  );
};

export default Carrito;



