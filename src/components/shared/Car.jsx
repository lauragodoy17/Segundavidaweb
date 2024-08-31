import React from "react";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";
import ActionButtons from "../ActionButtons";
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const { showOrder, setShowOrder } = props;
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/RegistroUsuarios"); 
  };
  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        showOrder ? "right-0" : "-right-full"
      }`}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4">Tu carrito</h1>

        {/* Car */}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Cant</h5>
            <h5>Precio</h5>
          </div>
          {/* Products */}
          <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">
            {/* Product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product description */}
                <div className="col-span-4 flex items-center gap-3">
                  <img src="comida.png" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Spaicy seaso...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* Acciones */}
                <ActionButtons/>
                
            </div>
          </div>
        </div>
        {/* Submit payment */}
        <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Descuento</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Subtotal</span>
            <span>$201.03</span>
          </div>
          <div>
            <button 
              onClick={handleRedirect}
              className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
              Continuar con el pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
