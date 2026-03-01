import { useState } from 'react';
import {
  Box,
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
  TextField,
  Typography,
  Pagination,
} from '@mui/material';
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
      <Typography variant="h4" gutterBottom>
        Bus Routes
      </Typography>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <TextField
              size="small"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Box>

          <TableContainer component={Paper} elevation={0}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell># ID</TableCell>
                  <TableCell>Route Name</TableCell>
                  <TableCell>Start Point</TableCell>
                  <TableCell>Destination</TableCell>
                  <TableCell>Route Code</TableCell>
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
                    <TableRow key={route.id}>
                      <TableCell>{route.id}</TableCell>
                      <TableCell>{route.route_code}</TableCell>
                      <TableCell>{route.start_point}</TableCell>
                      <TableCell>{route.destination}</TableCell>
                      <TableCell>{route.route_code}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      No routes found
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
              {Math.min(page * rowsPerPage, filteredData?.length || 0)} of{' '}
              {filteredData?.length || 0} entries
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

export default BusRoutes;
