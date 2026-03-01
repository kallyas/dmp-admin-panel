import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useCreateStaff, useVendors } from '../api/hooks';

const AddStaff = () => {
  const navigate = useNavigate();
  const createStaffMutation = useCreateStaff();
  const { data: vendors } = useVendors();
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    vendor_id: '',
    password: '',
    user_type_id: 2,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await createStaffMutation.mutateAsync({
        ...formData,
        vendor_id: parseInt(formData.vendor_id),
      });
      navigate('/dashboard/staff');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create staff');
    }
  };

  return (
    <Box>
      <Card>
        <CardHeader
          title="Add Vendor Admin"
          subheader="Create a new staff member for vendor management"
          action={
            <Button
              variant="outlined"
              size="small"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/dashboard/staff')}
            >
              Back to Staff
            </Button>
          }
        />
        <Divider />
        <CardContent sx={{ p: 3 }}>
          {error && (
            <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(null)}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
              Personal Information
            </Typography>
            <Grid container spacing={2.5}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  placeholder="Enter first name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  placeholder="Enter last name"
                />
              </Grid>
            </Grid>

            <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 4, mb: 2 }}>
              Contact Details
            </Typography>
            <Grid container spacing={2.5}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                  placeholder="+255 XXX XXX XXX"
                />
              </Grid>
            </Grid>

            <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 4, mb: 2 }}>
              Account Settings
            </Typography>
            <Grid container spacing={2.5}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>Assign to Vendor</InputLabel>
                  <Select
                    name="vendor_id"
                    value={formData.vendor_id}
                    onChange={handleChange}
                    label="Assign to Vendor"
                  >
                    {vendors?.map((vendor) => (
                      <MenuItem key={vendor.id} value={vendor.id}>
                        {vendor.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter secure password"
                  helperText="Minimum 8 characters"
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                variant="outlined"
                onClick={() => navigate('/dashboard/staff')}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={createStaffMutation.isPending}
                startIcon={createStaffMutation.isPending ? null : <SaveOutlinedIcon />}
              >
                {createStaffMutation.isPending ? (
                  <CircularProgress size={22} color="inherit" />
                ) : (
                  'Create Staff Member'
                )}
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddStaff;
