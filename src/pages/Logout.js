/* eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../features/login/loginSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    // clear local storage
    dispatch(logoutUser());
    // redirect to login page
    navigate("/");
  }, []);

  return <div>Logging out and Redirecting to login...</div>;
};

export default Logout;
