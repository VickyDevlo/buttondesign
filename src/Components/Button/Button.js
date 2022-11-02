import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
const Button = ({ variant, size, children, clickHandler }) => {
  return (
    <div>
      <button className={`${variant} ${size} btn`} onClick={clickHandler}>
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = {
  variant: "primary",
  size: "sm",
  children: "",
  clickHandler: null,
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
