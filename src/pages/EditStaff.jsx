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
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
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
        <Card>
          <CardHeader title={<Skeleton width={200} />} subheader={<Skeleton width={300} />} />
          <Divider />
          <CardContent sx={{ p: 3 }}>
            <Grid container spacing={2.5}>
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
      <Card>
        <CardHeader
          title="Edit Staff Member"
          subheader={`Updating: ${staff?.first_name} ${staff?.last_name}`}
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
                  placeholder="+255 XXX XXX XXX"
                />
              </Grid>
            </Grid>

            <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 4, mb: 2 }}>
              Account Settings
            </Typography>
            <Grid container spacing={2.5}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
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
                  label="New Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Leave blank to keep current"
                  helperText="Only fill if changing password"
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
                disabled={updateStaffMutation.isPending}
                startIcon={updateStaffMutation.isPending ? null : <SaveOutlinedIcon />}
              >
                {updateStaffMutation.isPending ? (
                  <CircularProgress size={22} color="inherit" />
                ) : (
                  'Save Changes'
                )}
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EditStaff;
