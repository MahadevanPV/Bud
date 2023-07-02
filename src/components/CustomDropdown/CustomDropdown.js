import React from 'react';
import './CustomDropdown.css';

const CustomDropdown = ({ options, selectedValue, onChange }) => {
  return (
    <div className="selectBox">
      <select value={selectedValue} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;