/* eslint-disable */
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginSelector } from "../features/login/loginSlice";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import APIService from "../config/Api";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { isLoggedIn } = useSelector(loginSelector);

  const isExpired = () => {
    if (isLoggedIn && localStorage.getItem("DPMAccessToken")) {
      const token = localStorage.getItem("DPMAccessToken");
      const decoded = token? jwt_decode(token): null;
      const currentTime = Date.now() / 1000;
      const error = {
        status: 401,
        message: "Token has expired",
      };
      if (token != null && decoded.exp < currentTime) {
        APIService.renewSession(error);
      }
    }
  };

  // check if token is expired and renew it
  useEffect(() => {
    if (isLoggedIn == false && localStorage.getItem("DPMAccessToken") === null) {
      return <Navigate to="/" />;
    }
    isExpired();
  }, [isLoggedIn]);

  return (
    <Outlet {...rest} />
  );
};

export default ProtectedRoute;
