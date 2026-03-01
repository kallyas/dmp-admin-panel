import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAccessToken } from './authSlice';
import Layout from '../../components/Layout';

export default function RequireAuth() {
  const accessToken = useSelector(selectAccessToken);
  const location = useLocation();

  if (!accessToken) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export const RequireNoAuth = () => {
  const accessToken = useSelector(selectAccessToken);
  const location = useLocation();

  return !accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  );
};
