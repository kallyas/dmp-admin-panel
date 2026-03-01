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
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useCreateVendor } from '../api/hooks';

const VENDOR_TYPES = [
  { id: 1, name: 'Bus' },
  { id: 2, name: 'Taxi' },
  { id: 3, name: 'Bus & Taxi' },
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
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader title="Add New Vendor" />
          <CardContent>
            <FormControl fullWidth>
              <InputLabel>Vendor Type</InputLabel>
              <Select
                name="vendor_type_id"
                value={vendor.vendor_type_id}
                onChange={handleChange}
                label="Vendor Type"
              >
                {VENDOR_TYPES.map((type) => (
                  <MenuItem key={type.id} value={type.id}>
                    {type.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={8}>
        <Card>
          <CardHeader title="New Vendor Information" />
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
                    label="Name"
                    name="name"
                    value={vendor.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone_number"
                    value={vendor.phone_number}
                    onChange={handleChange}
                    placeholder="0712345678"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Physical Address"
                    name="physical_address"
                    value={vendor.physical_address}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Postal Address"
                    name="postal_address"
                    value={vendor.postal_address}
                    onChange={handleChange}
                    placeholder="P.O. Box XXXX Kampala"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Trade Name"
                    name="trade_name"
                    value={vendor.trade_name}
                    onChange={handleChange}
                    placeholder="Link Bus Limited"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Area of Operation</InputLabel>
                    <Select
                      name="area_id"
                      value={vendor.area_id}
                      onChange={handleChange}
                      label="Area of Operation"
                      required
                    >
                      {REGIONS.map((region) => (
                        <MenuItem key={region.id} value={region.id}>
                          {region.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={vendor.email}
                    onChange={handleChange}
                    placeholder="johndoe@gmail.com"
                    required
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={createVendorMutation.isPending}
                >
                  {createVendorMutation.isPending ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    'Add New Vendor'
                  )}
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default VendorForm;
