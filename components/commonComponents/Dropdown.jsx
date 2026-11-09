import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const Dropdown = ({ options, value, label, placeholder, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown-section">
      <div className="dropdown-value" onClick={() => setOpen(!open)}>
        {value ? value : placeholder} <IoIosArrowUp size={16} />
      </div>
      {open && (
        <div className="dropdown-option-box">
          {options.map((ele, i) => {
            return (
              <div
                key={i}
                className="dropdown-option"
                onClick={() => {
                  setOpen(false);
                  onChange(ele);
                }}
              >
                {ele?.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
