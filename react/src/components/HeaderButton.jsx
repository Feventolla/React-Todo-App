import React from "react";
import Button from "./Button";

const HeaderButton = ({ Add, showadd }) => {
  return (
    <div>
      <Button text={!showadd ? "ADD TODO" : "CLOSE"} onClick={Add} />
    </div>
  );
};

export default HeaderButton;
