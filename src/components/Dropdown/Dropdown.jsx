import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState('Precios');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); 
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        {selectedOption} <RiArrowDownSLine />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleOptionClick('primerPrecio')}>De 10k a 50k</li>
          <li onClick={() => handleOptionClick('segundoPrecio')}>De 50k a 100k</li>
          <li onClick={() => handleOptionClick('tercerPrecio')}>100k en adelante</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
