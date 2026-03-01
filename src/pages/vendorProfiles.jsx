import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  IconButton,
  InputAdornment,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Pagination,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { useVendors } from '../api/hooks';

const VendorProfiles = () => {
  const { data: vendors, isLoading } = useVendors();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const rowsPerPage = 10;

  const filteredVendors = vendors?.filter(
    (vendor) =>
      vendor.name?.toLowerCase().includes(search.toLowerCase()) ||
      vendor.trade_name?.toLowerCase().includes(search.toLowerCase()) ||
      vendor.email?.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedVendors = filteredVendors?.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const totalPages = Math.ceil((filteredVendors?.length || 0) / rowsPerPage);

  return (
    <Box>
      <Card>
        <CardHeader
          title="Vendor Management"
          subheader={`${vendors?.length || 0} total vendors`}
          action={
            <Stack direction="row" spacing={1.5} alignItems="center">
              <TextField
                size="small"
                placeholder="Search vendors..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: 220 }}
              />
              <Button
                component={Link}
                to="/dashboard/add-vendor"
                variant="contained"
                startIcon={<AddIcon />}
                size="small"
              >
                Add Vendor
              </Button>
            </Stack>
          }
        />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Vendor</TableCell>
                <TableCell>Trade Name</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                [...Array(5)].map((_, i) => (
                  <TableRow key={i}>
                    {[...Array(6)].map((_, j) => (
                      <TableCell key={j}>
                        <Skeleton />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : paginatedVendors?.length > 0 ? (
                paginatedVendors.map((vendor, index) => (
                  <TableRow key={vendor.id || index} hover>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={1.5}>
                        <Avatar
                          sx={{
                            width: 36,
                            height: 36,
                            bgcolor: 'primary.main',
                            fontSize: '0.875rem',
                          }}
                        >
                          {vendor.name?.[0]}
                        </Avatar>
                        <Box>
                          <Typography variant="body2" fontWeight={600}>
                            {vendor.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {vendor.email}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{vendor.trade_name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{vendor.phone_number}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" noWrap sx={{ maxWidth: 180 }}>
                        {vendor.physical_address}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label="Active"
                        size="small"
                        color="success"
                        sx={{ fontSize: '0.6875rem' }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        component={Link}
                        to="/dashboard/add-staff"
                        variant="outlined"
                        size="small"
                        startIcon={<PersonAddOutlinedIcon />}
                        sx={{ mr: 1 }}
                      >
                        Add Admin
                      </Button>
                      <IconButton size="small">
                        <MoreVertIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                    <Typography variant="body2" color="text.secondary">
                      {search ? 'No vendors match your search' : 'No vendors found'}
                    </Typography>
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
            px: 2,
            py: 1.5,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Showing {Math.min((page - 1) * rowsPerPage + 1, filteredVendors?.length || 0)} to{' '}
            {Math.min(page * rowsPerPage, filteredVendors?.length || 0)} of{' '}
            {filteredVendors?.length || 0} entries
          </Typography>
          {totalPages > 1 && (
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, value) => setPage(value)}
              color="primary"
              size="small"
            />
          )}
        </Box>
      </Card>
    </Box>
  );
};

export default VendorProfiles;
