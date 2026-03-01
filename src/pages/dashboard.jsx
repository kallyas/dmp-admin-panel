import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Skeleton,
  Pagination,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useVendors, useRoutes, useSessions } from '../api/hooks';
import DPMCharts from '../components/DPMCharts';

dayjs.extend(relativeTime);

const StatCard = ({ title, value, icon, loading }) => (
  <Card>
    <CardContent>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {title} <span style={{ color: '#888' }}>| Today</span>
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            backgroundColor: 'primary.light',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'primary.main',
          }}
        >
          {icon}
        </Box>
        <Box>
          {loading ? (
            <Skeleton width={60} height={40} />
          ) : (
            <Typography variant="h4" fontWeight={700} color="primary">
              {value}
            </Typography>
          )}
          <Typography variant="caption" color="success.main" fontWeight={600}>
            12% <span style={{ color: '#888' }}>increase</span>
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const { data: vendors, isLoading: vendorsLoading } = useVendors();
  const { data: busRoutes, isLoading: routesLoading } = useRoutes();
  const { data: sessions, isLoading: sessionsLoading } = useSessions();

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const paginatedVendors = vendors?.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const totalPages = Math.ceil((vendors?.length || 0) / rowsPerPage);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Stats Cards */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
              <StatCard
                title="Vendors"
                value={vendors?.length || 0}
                icon={<BusinessIcon />}
                loading={vendorsLoading}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <StatCard
                title="Bus Routes"
                value={busRoutes?.length || 0}
                icon={<DirectionsBusIcon />}
                loading={routesLoading}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <StatCard
                title="Sales"
                value={145}
                icon={<ShoppingCartIcon />}
                loading={false}
              />
            </Grid>

            {/* Reports Chart */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Reports <span style={{ color: '#888' }}>/Today</span>
                  </Typography>
                  <DPMCharts />
                </CardContent>
              </Card>
            </Grid>

            {/* Recent Vendors Table */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Recent Vendors <span style={{ color: '#888' }}>/Today</span>
                  </Typography>
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
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {vendorsLoading ? (
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
                          paginatedVendors.map((vendor, i) => (
                            <TableRow key={vendor.id || i}>
                              <TableCell>
                                {(page - 1) * rowsPerPage + i + 1}
                              </TableCell>
                              <TableCell>{vendor.name}</TableCell>
                              <TableCell>{vendor.trade_name}</TableCell>
                              <TableCell>{vendor.phone_number}</TableCell>
                              <TableCell>{vendor.email}</TableCell>
                              <TableCell>{vendor.physical_address}</TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={6} align="center">
                              No vendors found
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  {totalPages > 1 && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                      <Pagination
                        count={totalPages}
                        page={page}
                        onChange={(_, value) => setPage(value)}
                        color="primary"
                      />
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'fit-content' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activity <span style={{ color: '#888' }}>| Today</span>
              </Typography>
              <Box sx={{ maxHeight: 400, overflow: 'auto' }}>
                {sessionsLoading ? (
                  [...Array(5)].map((_, i) => (
                    <Box key={i} sx={{ py: 1 }}>
                      <Skeleton />
                    </Box>
                  ))
                ) : sessions?.length > 0 ? (
                  sessions
                    .slice(-20)
                    .reverse()
                    .map((session, i) => (
                      <Box
                        key={i}
                        sx={{
                          py: 1,
                          borderBottom: '1px solid #eee',
                          '&:last-child': { borderBottom: 'none' },
                        }}
                      >
                        <Typography variant="body2">
                          <strong>
                            {session.first_name} {session.last_name}
                          </strong>{' '}
                          logged in {dayjs(session.logged_in_at).fromNow()} at{' '}
                          {dayjs(session.logged_in_at).format('h:mm a')}
                        </Typography>
                      </Box>
                    ))
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    No recent activity
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
