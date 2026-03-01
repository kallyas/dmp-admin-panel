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
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  alpha,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import { loginSchema } from '../utils/validations';
import { setToken } from '../features/auth/authSlice';
import { useLogin } from '../api/hooks';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

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
        background: (theme) =>
          `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.primary.light, 0.1)} 100%)`,
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Card sx={{ overflow: 'visible' }}>
          {/* Header Section */}
          <Box
            sx={{
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              color: 'white',
              py: 4,
              px: 3,
              textAlign: 'center',
              borderRadius: '8px 8px 0 0',
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: 2,
                bgcolor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 2,
              }}
            >
              <DirectionsBusIcon sx={{ fontSize: 36, color: 'primary.main' }} />
            </Box>
            <Typography variant="h5" fontWeight={700}>
              DPM Admin Panel
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.85, mt: 0.5 }}>
              Transport Management System
            </Typography>
          </Box>

          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h6"
              textAlign="center"
              gutterBottom
              fontWeight={600}
            >
              Welcome back
            </Typography>
            <Typography
              variant="body2"
              textAlign="center"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              Enter your credentials to access your account
            </Typography>

            {error && (
              <Alert 
                severity="error" 
                sx={{ mb: 3 }}
                onClose={() => setError(null)}
              >
                {error}
              </Alert>
            )}

            <Box
              component="form"
              onSubmit={handleSubmit(handleLogin)}
            >
              <Stack spacing={2.5}>
                <TextField
                  fullWidth
                  label="Email Address"
                  placeholder="you@example.com"
                  type="email"
                  {...register('email')}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon fontSize="small" color="action" />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="Password"
                  placeholder="Enter your password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon fontSize="small" color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffOutlinedIcon fontSize="small" />
                          ) : (
                            <VisibilityOutlinedIcon fontSize="small" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  disabled={loginMutation.isPending}
                  sx={{ mt: 1 }}
                >
                  {loginMutation.isPending ? (
                    <CircularProgress size={22} color="inherit" />
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </Stack>
            </Box>

            <Divider sx={{ my: 3 }}>
              <Typography variant="caption" color="text.secondary">
                Secure Login
              </Typography>
            </Divider>

            <Typography
              variant="caption"
              display="block"
              textAlign="center"
              color="text.secondary"
            >
              This system is for authorized personnel only.
              <br />
              All activities are logged and monitored.
            </Typography>
          </CardContent>
        </Card>

        <Typography
          variant="caption"
          display="block"
          textAlign="center"
          color="text.secondary"
          sx={{ mt: 3 }}
        >
          © {new Date().getFullYear()} DPM Ltd. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Login;
