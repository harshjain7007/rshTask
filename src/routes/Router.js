import React from "react";
import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import {
  FULLLAYOUT,
  DASHBOARD,
  BLAKEOUT,
  LOGIN,
} from "./RouteConstant";



const Router = () => {
  const isAuthenticated = sessionStorage.getItem("token")
  
  const RoutePages =   [
    {
      path: "/",
      element: isAuthenticated ? <FULLLAYOUT /> : <Navigate to="/auth/login" /> ,
      children: [
        { path: "/", element: <Navigate to="/auth/login" /> },
        { path: "/dashboard", exact: true, element: <DASHBOARD /> },
        
        { path: "*", element: <Navigate to="/dashboard" /> },
      ],
    },
  
    {
      path: "/",
      element: <BLAKEOUT />,
      children: [
        { path: "auth/login", element: <LOGIN /> },
      ],
    },
  ];
  

  return RoutePages
}

export default Router