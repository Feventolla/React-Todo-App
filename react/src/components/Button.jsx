import React from "react";

const Button = ({ color, text, onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }}>
      {text}
    </button>
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
export default Button;
