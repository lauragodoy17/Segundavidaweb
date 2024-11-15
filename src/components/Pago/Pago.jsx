import React from 'react';
import './Pago.css'; // Importa el archivo de estilo CSS
import Sidebar from '../shared/Sidebar';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la redirección

const Pago = () => {
  const navigate = useNavigate(); // Hook para redirigir

  const handlePayment = () => {
    Swal.fire({
        title: 'Pago exitoso',
        text: 'Tu pago ha sido procesado correctamente.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('segundavidaweb/'); // Redirigir a la pantalla de inicio después de confirmar la alerta
      });
      
  };

  return (
    <div className="container">
      <Sidebar showMenu={true} />
      <div className="content">
        <h1 className="title">Continuar con el Pago</h1>
        <p className="description">Por favor, revisa y confirma tu información antes de continuar.</p>

        <div className="payment-details">
          <div className="payment-item">
            <span>Producto:</span>
            <span>Servicio de ejemplo</span>
          </div>
          <div className="payment-item">
            <span>Precio:</span>
            <span>$50.00</span>
          </div>
          <div className="payment-item">
            <span>Método de pago:</span>
            <select>
              <option>Tarjeta de Crédito</option>
              <option>PayPal</option>
              <option>Transferencia Bancaria</option>
            </select>
          </div>
        </div>

        <button className="btn" onClick={handlePayment}>Pagar Ahora</button>
      </div>
    </div>
  );
};

export default Pago;

