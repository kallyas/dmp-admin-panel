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
    if (isLoggedIn) {
      const token = localStorage.getItem("DPMAccessToken");
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      const error = {
        status: 401,
        message: "Token has expired",
      };
      if (decoded.exp < currentTime) {
        APIService.renewSession(error);
      }
    }
  };

  // check if token is expired and renew it
  useEffect(() => {
    if (!isLoggedIn) {
      return <Navigate to="/" />;
    }
    isExpired();
  }, [isLoggedIn]);

  return (
    <Outlet {...rest}>
      <Element />
    </Outlet>
  );
};

export default ProtectedRoute;
