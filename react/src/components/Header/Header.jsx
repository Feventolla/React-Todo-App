import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./header.css";

const Header = () => {
  return (
    <div>
      <HashLink smooth to="/" className="header-txt">
        <p>
          <span>GO</span>Todo
        </p>
      </HashLink>
      <nav>
        <HashLink className="header-nav" smooth to="/login">
          LOGIN
        </HashLink>
        <HashLink className="header-nav2" smooth to={"/register"}>
          Register
        </HashLink>
      </nav>
    </div>
  );
};

export default Header;
