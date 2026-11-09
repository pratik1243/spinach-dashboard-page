import React from "react";

const Backdrop = ({ open, onClose }) => {
  return (
    <div className={`backdrop ${open ? "open" : ""}`} onClick={onClose}></div>
  );
};

export default Backdrop;
