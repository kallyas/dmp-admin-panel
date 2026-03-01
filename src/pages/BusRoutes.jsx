import { useState } from 'react';
import {
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
  Tooltip,
  Typography,
  Pagination,
  alpha,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRoutes } from '../api/hooks';

const BusRoutes = () => {
  const { data, isLoading } = useRoutes();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const rowsPerPage = 10;

  const filteredData = data?.filter(
    (route) =>
      route.route_code?.toLowerCase().includes(search.toLowerCase()) ||
      route.start_point?.toLowerCase().includes(search.toLowerCase()) ||
      route.destination?.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedData = filteredData?.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const totalPages = Math.ceil((filteredData?.length || 0) / rowsPerPage);

  return (
    <Box>
      <Card>
        <CardHeader
          title="Route Management"
          subheader={`${data?.length || 0} total routes`}
          action={
            <Stack direction="row" spacing={1.5} alignItems="center">
              <TextField
                size="small"
                placeholder="Search routes..."
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
                variant="contained"
                startIcon={<AddIcon />}
                size="small"
              >
                Add Route
              </Button>
            </Stack>
          }
        />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Route</TableCell>
                <TableCell>Start Point</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                [...Array(5)].map((_, i) => (
                  <TableRow key={i}>
                    {[...Array(5)].map((_, j) => (
                      <TableCell key={j}>
                        <Skeleton />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : paginatedData?.length > 0 ? (
                paginatedData.map((route) => (
                  <TableRow key={route.id} hover>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={1.5}>
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                            color: 'primary.main',
                          }}
                        >
                          <RouteOutlinedIcon fontSize="small" />
                        </Box>
                        <Box>
                          <Typography variant="body2" fontWeight={600}>
                            {route.route_code}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            ID: {route.id}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={0.75}>
                        <PlaceOutlinedIcon sx={{ fontSize: 16, color: 'success.main' }} />
                        <Typography variant="body2">{route.start_point}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={0.75}>
                        <FlagOutlinedIcon sx={{ fontSize: 16, color: 'error.main' }} />
                        <Typography variant="body2">{route.destination}</Typography>
                      </Stack>
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
                      <Tooltip title="More options">
                        <IconButton size="small">
                          <MoreVertIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 6 }}>
                    <Typography variant="body2" color="text.secondary">
                      {search ? 'No routes match your search' : 'No routes found'}
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
            Showing {Math.min((page - 1) * rowsPerPage + 1, filteredData?.length || 0)} to{' '}
            {Math.min(page * rowsPerPage, filteredData?.length || 0)} of{' '}
            {filteredData?.length || 0} entries
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

export default BusRoutes;
