import React from "react";
import { RiDeleteBin6Line, RiAddLine, RiSubtractLine } from "react-icons/ri";

const ActionButtons = () => {
  return (
    <div className="flex gap-2">
      {/* Botón para añadir */}
      <button className="border border-green-500 p-2 rounded-lg flex items-center justify-center bg-green-500 hover:bg-green-600">
        <RiAddLine className="text-white" />
      </button>

      {/* Botón para restar */}
      <button className="border border-yellow-500 p-2 rounded-lg flex items-center justify-center bg-yellow-500 hover:bg-yellow-600">
        <RiSubtractLine className="text-white" />
      </button>

      {/* Botón para eliminar */}
      <button className="border border-red-500 p-2 rounded-lg flex items-center justify-center bg-red-500 hover:bg-red-600">
        <RiDeleteBin6Line className="text-white" />
      </button>
    </div>
  );
};

export default ActionButtons;
