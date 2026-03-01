import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
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
  alpha,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import CommuteOutlinedIcon from '@mui/icons-material/CommuteOutlined';
import { useCreateVendor } from '../api/hooks';

const VENDOR_TYPES = [
  { id: 1, name: 'Bus', icon: DirectionsBusOutlinedIcon },
  { id: 2, name: 'Taxi', icon: LocalTaxiOutlinedIcon },
  { id: 3, name: 'Bus & Taxi', icon: CommuteOutlinedIcon },
];

const REGIONS = [
  { id: 1, name: 'Central' },
  { id: 2, name: 'Northern' },
  { id: 3, name: 'Eastern' },
  { id: 4, name: 'Western' },
];

const VendorForm = () => {
  const navigate = useNavigate();
  const createVendorMutation = useCreateVendor();
  const [error, setError] = useState(null);

  const [vendor, setVendor] = useState({
    name: '',
    email: '',
    phone_number: '',
    physical_address: '',
    trade_name: '',
    postal_address: '',
    vendor_type_id: '',
    area_id: '',
  });

  const handleChange = (e) => {
    setVendor((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await createVendorMutation.mutateAsync(vendor);
      navigate('/dashboard/vendors');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create vendor');
    }
  };

  return (
    <Grid container spacing={2.5}>
      {/* Vendor Type Selection */}
      <Grid item xs={12} md={4}>
        <Card sx={{ height: '100%' }}>
          <CardHeader
            title="Vendor Type"
            subheader="Select the service type"
          />
          <Divider />
          <CardContent>
            <Stack spacing={1.5}>
              {VENDOR_TYPES.map((type) => {
                const Icon = type.icon;
                const isSelected = vendor.vendor_type_id === type.id;
                return (
                  <Box
                    key={type.id}
                    onClick={() => setVendor(prev => ({ ...prev, vendor_type_id: type.id }))}
                    sx={{
                      p: 2,
                      borderRadius: 1,
                      border: '1px solid',
                      borderColor: isSelected ? 'primary.main' : 'divider',
                      bgcolor: isSelected ? (theme) => alpha(theme.palette.primary.main, 0.04) : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      '&:hover': {
                        borderColor: 'primary.main',
                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.04),
                      },
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: isSelected ? 'primary.main' : 'grey.100',
                          color: isSelected ? 'white' : 'text.secondary',
                        }}
                      >
                        <Icon />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" fontWeight={600}>
                          {type.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {type.id === 1 && 'Long distance transport'}
                          {type.id === 2 && 'Short distance transport'}
                          {type.id === 3 && 'Multi-service transport'}
                        </Typography>
                      </Box>
                      {isSelected && (
                        <Chip label="Selected" size="small" color="primary" sx={{ fontSize: '0.6875rem' }} />
                      )}
                    </Stack>
                  </Box>
                );
              })}
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      {/* Vendor Details Form */}
      <Grid item xs={12} md={8}>
        <Card>
          <CardHeader
            title="Vendor Information"
            subheader="Enter the vendor details"
            action={
              <Button
                variant="outlined"
                size="small"
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate('/dashboard/vendors')}
              >
                Back
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
                Basic Information
              </Typography>
              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Company Name"
                    name="name"
                    value={vendor.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter company name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Trade Name"
                    name="trade_name"
                    value={vendor.trade_name}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Link Bus Limited"
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
                    value={vendor.email}
                    onChange={handleChange}
                    required
                    placeholder="company@example.com"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone_number"
                    value={vendor.phone_number}
                    onChange={handleChange}
                    required
                    placeholder="+255 XXX XXX XXX"
                  />
                </Grid>
              </Grid>

              <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 4, mb: 2 }}>
                Location
              </Typography>
              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Physical Address"
                    name="physical_address"
                    value={vendor.physical_address}
                    onChange={handleChange}
                    required
                    placeholder="Street address"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Postal Address"
                    name="postal_address"
                    value={vendor.postal_address}
                    onChange={handleChange}
                    placeholder="P.O. Box XXXX"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Area of Operation</InputLabel>
                    <Select
                      name="area_id"
                      value={vendor.area_id}
                      onChange={handleChange}
                      label="Area of Operation"
                    >
                      {REGIONS.map((region) => (
                        <MenuItem key={region.id} value={region.id}>
                          {region.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Divider sx={{ my: 4 }} />

              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button
                  variant="outlined"
                  onClick={() => navigate('/dashboard/vendors')}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={createVendorMutation.isPending || !vendor.vendor_type_id}
                  startIcon={createVendorMutation.isPending ? null : <SaveOutlinedIcon />}
                >
                  {createVendorMutation.isPending ? (
                    <CircularProgress size={22} color="inherit" />
                  ) : (
                    'Create Vendor'
                  )}
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default VendorForm;
