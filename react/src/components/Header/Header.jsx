import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="header-txt">
        <p>
          <span>GO</span>Todo
        </p>
      </div>
      <nav>
        <Link
          style={{ textDecoration: "none" }}
          className="header-nav"
          to={"/login"}
        >
          LOGIN
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          className="header-nav2"
          to={"/register"}
        >
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Header;
