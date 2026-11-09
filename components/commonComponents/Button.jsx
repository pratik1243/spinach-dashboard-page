import React from "react";

const Button = ({
  text,
  icon,
  onClick,
  background,
  borderColor,
  textColor,
  circleBtn,
  className,
  badge,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`custom-btn ${className} ${circleBtn ? "circleBtn" : ""}`}
      style={{
        ...(background && {
          backgroundColor: background,
        }),
        ...(borderColor && {
          borderColor: borderColor,
        }),
        ...(textColor && {
          color: textColor,
        }),
      }}
      onClick={onClick}
    >
      {icon || null} {text && <span>{text}</span>}
      {badge > 0 && <div className="badge">{badge}</div>}
    </button>
  );
};

export default Button;
