import { Box, Typography } from '@mui/material';
import VendorForm from '../components/VendorForm';

const AddVendor = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Add Vendor
      </Typography>
      <VendorForm />
    </Box>
  );
};

export default AddVendor;
