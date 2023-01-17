/* eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../features/login/loginSlice";
import { toast } from "react-hot-toast";

const Logout = () => {
  const navigate = useNavigate();
  const [logout, { isLoading }] = useLogoutUserMutation();

  const response = async () => {
    try {
      const response = await logout().unwrap();
      if (response.status === 200) {
        toast.success("Logout successfully");
        navigate("/");
      }
    } catch (error) {
      if (parseInt(error.status) !== error.status) {
        console.log("Network error, please try again later");
      } else {
        console.log(error?.data?.msg);
      }
    }
  };

  useEffect(() => {
    response();
  }, []);

  return !isLoading && <div>Logging out and Redirecting to login...</div>;
};

export default Logout;
