/* eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLogoutUserMutation } from "../features/login/loginSlice";

const Logout = () => {
  const navigate = useNavigate();
  const [logout, { isLoading }] = useLogoutUserMutation();

  const response = async () => {
    try {
      const response = await logout().unwrap();
      navigate("/login");
    } catch (error) {
      if (parseInt(error.status) !== error.status) {
        console.log("Network error, please try again later");
      } else {
        console.log(error.data.message);
        console.error(error);
      }
    }
  };

  useEffect(() => {
    response();
  }, []);

  return !isLoading && <div>Logging out and Redirecting to login...</div>;
};

export default Logout;
