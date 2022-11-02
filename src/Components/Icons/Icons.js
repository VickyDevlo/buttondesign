import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

import { AiFillCheckCircle } from "react-icons/ai";

const Icons = ({ style }) => {
  return (
    <div className="Icon">
      <AiFillCheckCircle className={style} />
    </div>
  );
};

Icons.defaultProps = {
  style: "",
};

Icons.prototypes = {
  style: PropTypes.string,
};
export default Icons;
