import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

import { AiOutlineCodeSandbox } from "react-icons/ai";

const Icons = ({ style }) => {
  return (
    <div className="Icon">
      <AiOutlineCodeSandbox className={style} />
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
