import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Buttonn = ({ color, text, onClick }) => {
  return (
    <Button onClick={onClick} style={{ backgroundColor: color }}>
      {text}
    </Button>
  );
};

// Button.defaultProps = {
//   color: "green",
//   text: "add",
// };

// Button.propTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string,
// };
export default Buttonn;
