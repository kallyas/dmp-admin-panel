import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { loginSchema } from '../utils/validations';
import { setToken } from '../features/auth/authSlice';
import { useLogin } from '../api/hooks';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useLogin();

  const handleLogin = async (data) => {
    setError(null);
    try {
      const response = await loginMutation.mutateAsync({
        username: data.email,
        password: data.password,
      });
      dispatch(
        setToken({
          accessToken: response.access_token,
          refreshToken: response.refresh_token,
        })
      );
      navigate('/dashboard');
    } catch (err) {
      if (!err.response) {
        setError('Network error, please try again');
      } else {
        setError(err.response?.data?.message || 'Login failed');
      }
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default',
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              mb: 2,
            }}
          >
            <img
              src="/roadslinks_logo.png"
              alt="Logo"
              style={{ width: 60, height: 60 }}
            />
            <Typography variant="h4" color="primary" fontWeight={700}>
              DPM Ltd
            </Typography>
          </Box>
        </Box>

        <Card>
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h5"
              textAlign="center"
              gutterBottom
              fontWeight={600}
            >
              Login to Your Account
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}

            <Box
              component="form"
              onSubmit={handleSubmit(handleLogin)}
              sx={{ mt: 3 }}
            >
              <TextField
                fullWidth
                label="Email"
                placeholder="Enter your email"
                type="email"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Password"
                placeholder="Enter your password"
                type="password"
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 3 }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Login'
                )}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;
