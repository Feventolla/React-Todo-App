import React from "react";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  let IsAuth;
  const token = localStorage.getItem("token");
  if (!token) {
    IsAuth = false;
  } else {
    IsAuth = true;
  }
  return IsAuth ? children : navigate("/login");
};

export default ProtectedRoutes;
