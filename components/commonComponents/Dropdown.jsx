import React, { useState, useRef } from "react";
import { IoIosArrowUp, IoMdClose } from "react-icons/io";
import { OutsideClickFunc } from "../../utils/eventsData";

const Dropdown = ({ options, value, placeholder, onChange, clearValue }) => {
  const divRef = useRef();
  const [open, setOpen] = useState(false);

  OutsideClickFunc(divRef, () => {
    setOpen(false);
  });

  return (
    <div className="dropdown-section">
      <div
        className="dropdown-value"
        ref={divRef}
        onClick={() => setOpen(!open)}
      >
        {value ? value : placeholder}{" "}
        {value ? (
          <div
            role="button"
            onClick={() => {
              clearValue();
              setOpen(false);
            }}
          >
            <IoMdClose size={17} />
          </div>
        ) : (
          <IoIosArrowUp size={16} />
        )}
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
