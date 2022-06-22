import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = (props) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("this", isAuthenticated);
  return isAuthenticated ? <Outlet/>: <Navigate to="/login"/>
}

export default ProtectRoute