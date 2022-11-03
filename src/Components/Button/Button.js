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
  textColor,
}) => {
  return (
    <div>
      <button
        className={`
        ${variant} 
        ${size} ${outline} 
        ${disabled} ${boxShadow} 
        ${textColor}
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
  textColor: "",
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
  textColor: PropTypes.oneOf([
    "textprimary",
    "textsecondary",
    "textsuccess",
    "textinfo",
    "textwarning",
    "textdanger",
  ]),
  outline: PropTypes.oneOf([
    "outlineprimary",
    "outlinesecondary",
    "outlinesuccess",
    "outlineinfo",
    "outlinewarning",
    "outlinedanger",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  children: PropTypes.node,
  clickHandler: PropTypes.func,
};

export default Button;
