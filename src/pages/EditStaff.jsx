import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  TextField,
  Typography,
} from '@mui/material';
import { useStaffById, useUpdateStaff, useVendors } from '../api/hooks';

const EditStaff = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: vendors } = useVendors();
  const { data: staff, isLoading } = useStaffById(id);
  const updateStaffMutation = useUpdateStaff();
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    vendor_id: '',
    password: '',
    id: '',
    user_type_id: 2,
  });

  useEffect(() => {
    if (staff) {
      setFormData({
        first_name: staff.first_name || '',
        last_name: staff.last_name || '',
        email: staff.email || '',
        phone_number: staff.phone_number || '',
        vendor_id: staff.vendor_id || '',
        password: '',
        id: staff.id,
        user_type_id: 2,
      });
    }
  }, [staff]);

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
      const response = await updateStaffMutation.mutateAsync(formData);
      if (response.message?.includes('updated')) {
        navigate('/dashboard/staff');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update staff');
    }
  };

  if (isLoading) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          Update Vendor Admin
        </Typography>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              {[...Array(6)].map((_, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Skeleton height={56} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Update Vendor Admin
      </Typography>

      <Card>
        <CardHeader title="Edit Staff Information" />
        <CardContent>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Vendor</InputLabel>
                  <Select
                    name="vendor_id"
                    value={formData.vendor_id}
                    onChange={handleChange}
                    label="Vendor"
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
                  placeholder="Enter new password to change"
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 3 }}>
              <Button
                type="submit"
                variant="contained"
                disabled={updateStaffMutation.isPending}
              >
                {updateStaffMutation.isPending ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Update Vendor Admin'
                )}
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EditStaff;
