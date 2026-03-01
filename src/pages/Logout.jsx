import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useLogout } from '../api/hooks';
import { logout } from '../features/auth/authSlice';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutMutation = useLogout();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logoutMutation.mutateAsync();
      } catch (error) {
        console.error('Logout error:', error);
      } finally {
        dispatch(logout());
        navigate('/');
      }
    };

    performLogout();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        gap: 2,
      }}
    >
      <CircularProgress />
      <Typography>Logging out...</Typography>
    </Box>
  );
};

export default Logout;
