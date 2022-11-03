import PropTypes from "prop-types";
import "./styles.css";

const Icons = ({ style, children, Iconvariant, Iconsize }) => {
  return (
    <div className={`${style} ${Iconsize} ${Iconvariant} icons`}>
      {children}
    </div>
  );
};

Icons.defaultProps = {
  style: "",
  Iconvariant: "",
  children: "",
  Iconsize: "",
};

Icons.prototypes = {
  Iconvariant: PropTypes.oneOf([
    "primaryicon",
    "secondaryicon",
    "successicon",
    "infoicon",
    "warningicon",
    "dangericon",
  ]),
  Iconsize: PropTypes.oneOf(["iconsm", "iconmd", "iconlg"]),
  style: PropTypes.string,
  children: PropTypes.node,
};
export default Icons;
