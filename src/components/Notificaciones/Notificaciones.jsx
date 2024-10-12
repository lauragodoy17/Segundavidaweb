import React from 'react';
import './Notificaciones.css'; // Importar el archivo CSS para estilos
import Sidebar from '../shared/Sidebar';


const Notificaciones = () => {
  return (
    <>
      <Sidebar/>

      <div className="rectangle">
        MIS NOTIFICACIONES
      </div>

      <div className="rectangle1">
        <p className='principal'>Más recientes</p>
        <hr className="line" />
        <div className="recent-container">
          <div className='cuadrado'></div>
          <p className='titulo'>¡Atención! 🎉 Nuevo producto: Zapatos deportivos - cómodos para correr por $49.99. ¡No te lo pierdas!</p>
        </div>
        <hr className="line" />

        <div className="recent-container">
          <div className='cuadrado1'></div>
          <p className='titulo'>¡Gran oferta! 🛍️ Cámara DSLR - captura tus mejores momentos por $399.99. ¡Aprovecha ahora!</p>
        </div>
        <hr className="line" />

        <div className="recent-container">
          <div className='cuadrado2'></div>
          <p className='titulo'>🌟 Nuevo lanzamiento: Auriculares inalámbricos - calidad de sonido excepcional por $79.99. ¡Consigue el tuyo ya!</p>
        </div>
        <hr className="line" />
      </div>

    </>
  );
};

export default Notificaciones;

