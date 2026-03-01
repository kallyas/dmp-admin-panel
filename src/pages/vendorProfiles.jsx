import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Pagination,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useVendors } from '../api/hooks';

const VendorProfiles = () => {
  const { data: vendors, isLoading } = useVendors();
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const paginatedVendors = vendors?.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const totalPages = Math.ceil((vendors?.length || 0) / rowsPerPage);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Vendors
      </Typography>

      <Card>
        <CardContent>
          <TableContainer component={Paper} elevation={0}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Trade Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Postal Address</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <TableRow key={i}>
                      {[...Array(8)].map((_, j) => (
                        <TableCell key={j}>
                          <Skeleton />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : paginatedVendors?.length > 0 ? (
                  paginatedVendors.map((vendor, index) => (
                    <TableRow key={vendor.id || index}>
                      <TableCell>{(page - 1) * rowsPerPage + index + 1}</TableCell>
                      <TableCell>{vendor.name}</TableCell>
                      <TableCell>{vendor.trade_name}</TableCell>
                      <TableCell>{vendor.phone_number}</TableCell>
                      <TableCell>{vendor.email}</TableCell>
                      <TableCell>{vendor.physical_address}</TableCell>
                      <TableCell>{vendor.postal_address}</TableCell>
                      <TableCell>
                        <Button
                          component={Link}
                          to="/dashboard/add-staff"
                          variant="contained"
                          size="small"
                          startIcon={<AddIcon />}
                        >
                          Add Admin
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} align="center">
                      No vendors found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Showing {(page - 1) * rowsPerPage + 1} to{' '}
              {Math.min(page * rowsPerPage, vendors?.length || 0)} of{' '}
              {vendors?.length || 0} entries
            </Typography>
            {totalPages > 1 && (
              <Pagination
                count={totalPages}
                page={page}
                onChange={(_, value) => setPage(value)}
                color="primary"
              />
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default VendorProfiles;
