/* eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLogoutUserMutation } from "../features/login/loginSlice";

const Logout = () => {
  const navigate = useNavigate();
  const [logout, { isLoading }] = useLogoutUserMutation();

  useEffect(() => {
    logout()
      .unwrap()
      .then(() => {
        navigate("/");
      });
  }, [logout, navigate]);

  return !isLoading && <div>Logging out and Redirecting to login...</div>;
};

export default Logout;
