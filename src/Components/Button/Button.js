import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Button = ({
  variant,
  size,
  children,
  clickHandler,
  outline,
  disabled,
  boxShadow,
}) => {
  return (
    <div>
      <button
        className={`
        ${variant} 
        ${size} ${outline} 
        ${disabled} ${boxShadow} 
        btn
      `}
        onClick={clickHandler}
      >
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = {
  variant: "",
  size: "sm",
  outline: "",
  disabled: "",
  children: "",
  clickHandler: null,
  boxShadow: "",
};

Button.prototypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  children: PropTypes.node,
  clickHandler: PropTypes.func,
};

export default Button;
