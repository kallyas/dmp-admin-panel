import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginSelector } from "../features/login/loginSlice";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { isLoggedIn } = useSelector(loginSelector);

  if(!isLoggedIn) {
    return <Navigate to="/" />
  }

  return (
    <Outlet {...rest}>
      <Element />
    </Outlet>
  );
};

export default ProtectedRoute;
