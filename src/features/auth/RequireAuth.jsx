import { useLocation, Navigate, Outlet } from "react-router-dom";
import { selectAccessToken } from "./authSlice";
import { useSelector } from "react-redux";

export default function RequireAuth() {
  const accessToken = useSelector(selectAccessToken);
  const location = useLocation();

  return accessToken ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/", state: { from: location } }} replace />
  );
}

export const RequireNoAuth = () => {
  const accessToken = useSelector(selectAccessToken);
  const location = useLocation();

  return !accessToken ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/dashboard", state: { from: location } }} replace />
  );
};
