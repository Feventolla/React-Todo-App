import React from "react";
import Button from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";

const HeaderButton = ({ Add, showadd }) => {
  return (
    <div>
      <Button text={!showadd ? "ADD TODO" : "CLOSE"} onClick={Add} />
    </div>
  );
};

export default HeaderButton;
