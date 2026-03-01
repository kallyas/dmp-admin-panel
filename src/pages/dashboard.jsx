import { useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  IconButton,
  LinearProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Skeleton,
  Pagination,
  alpha,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useVendors, useRoutes, useSessions, useStaff } from '../api/hooks';
import DPMCharts from '../components/DPMCharts';

dayjs.extend(relativeTime);

const StatCard = ({ title, value, change, changeType, icon, color, loading }) => (
  <Card>
    <CardContent sx={{ p: 2.5 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
        <Box>
          <Typography variant="subtitle2" color="text.secondary" fontWeight={500}>
            {title}
          </Typography>
          {loading ? (
            <Skeleton width={80} height={36} sx={{ mt: 0.5 }} />
          ) : (
            <Typography variant="h4" fontWeight={700} sx={{ mt: 0.5 }}>
              {value}
            </Typography>
          )}
          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 1 }}>
            {changeType === 'up' ? (
              <TrendingUpIcon sx={{ fontSize: 16, color: 'success.main' }} />
            ) : (
              <TrendingDownIcon sx={{ fontSize: 16, color: 'error.main' }} />
            )}
            <Typography
              variant="caption"
              fontWeight={600}
              color={changeType === 'up' ? 'success.main' : 'error.main'}
            >
              {change}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              vs last month
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: alpha(color, 0.1),
            color: color,
          }}
        >
          {icon}
        </Box>
      </Stack>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const { data: vendors, isLoading: vendorsLoading } = useVendors();
  const { data: busRoutes, isLoading: routesLoading } = useRoutes();
  const { data: sessions, isLoading: sessionsLoading } = useSessions();
  const { data: staff, isLoading: staffLoading } = useStaff();

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const paginatedVendors = vendors?.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const totalPages = Math.ceil((vendors?.length || 0) / rowsPerPage);

  return (
    <Box>
      {/* Stats Grid */}
      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} lg={3}>
          <StatCard
            title="Total Vendors"
            value={vendors?.length || 0}
            change="+12%"
            changeType="up"
            icon={<BusinessOutlinedIcon />}
            color="#0891b2"
            loading={vendorsLoading}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <StatCard
            title="Bus Routes"
            value={busRoutes?.length || 0}
            change="+8%"
            changeType="up"
            icon={<DirectionsBusOutlinedIcon />}
            color="#0d9488"
            loading={routesLoading}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <StatCard
            title="Total Staff"
            value={staff?.length || 0}
            change="+5%"
            changeType="up"
            icon={<PeopleOutlinedIcon />}
            color="#8b5cf6"
            loading={staffLoading}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <StatCard
            title="Total Trips"
            value={1248}
            change="-3%"
            changeType="down"
            icon={<ReceiptLongOutlinedIcon />}
            color="#f59e0b"
            loading={false}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2.5}>
        {/* Chart */}
        <Grid item xs={12} lg={8}>
          <Card>
            <CardHeader
              title="Revenue Overview"
              subheader="Monthly performance metrics"
              action={
                <IconButton size="small">
                  <MoreVertIcon fontSize="small" />
                </IconButton>
              }
            />
            <CardContent sx={{ pt: 0 }}>
              <DPMCharts />
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} lg={4}>
          <Card sx={{ height: '100%' }}>
            <CardHeader
              title="Recent Activity"
              subheader="Latest login sessions"
              action={
                <Chip label="Live" size="small" color="success" variant="outlined" />
              }
            />
            <CardContent sx={{ pt: 0, maxHeight: 340, overflow: 'auto' }}>
              <Stack spacing={2}>
                {sessionsLoading ? (
                  [...Array(5)].map((_, i) => (
                    <Stack key={i} direction="row" spacing={2} alignItems="center">
                      <Skeleton variant="circular" width={36} height={36} />
                      <Box sx={{ flex: 1 }}>
                        <Skeleton width="60%" height={20} />
                        <Skeleton width="40%" height={16} />
                      </Box>
                    </Stack>
                  ))
                ) : sessions?.length > 0 ? (
                  sessions
                    .slice(-10)
                    .reverse()
                    .map((session, i) => (
                      <Stack key={i} direction="row" spacing={1.5} alignItems="center">
                        <Avatar
                          sx={{
                            width: 36,
                            height: 36,
                            bgcolor: 'primary.main',
                            fontSize: '0.8125rem',
                          }}
                        >
                          {session.first_name?.[0]}
                          {session.last_name?.[0]}
                        </Avatar>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Typography variant="body2" fontWeight={600} noWrap>
                            {session.first_name} {session.last_name}
                          </Typography>
                          <Stack direction="row" alignItems="center" spacing={0.5}>
                            <AccessTimeIcon sx={{ fontSize: 12, color: 'text.secondary' }} />
                            <Typography variant="caption" color="text.secondary">
                              {dayjs(session.logged_in_at).fromNow()}
                            </Typography>
                          </Stack>
                        </Box>
                        <Chip
                          label="Login"
                          size="small"
                          sx={{ fontSize: '0.6875rem', height: 20 }}
                        />
                      </Stack>
                    ))
                ) : (
                  <Typography variant="body2" color="text.secondary" textAlign="center">
                    No recent activity
                  </Typography>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Vendors Table */}
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title="Recent Vendors"
              subheader={`${vendors?.length || 0} total vendors`}
              action={
                <IconButton size="small">
                  <MoreVertIcon fontSize="small" />
                </IconButton>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {vendorsLoading ? (
                    [...Array(5)].map((_, i) => (
                      <TableRow key={i}>
                        {[...Array(5)].map((_, j) => (
                          <TableCell key={j}>
                            <Skeleton />
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : paginatedVendors?.length > 0 ? (
                    paginatedVendors.map((vendor, i) => (
                      <TableRow key={vendor.id || i} hover>
                        <TableCell>
                          <Stack direction="row" alignItems="center" spacing={1.5}>
                            <Avatar
                              sx={{
                                width: 32,
                                height: 32,
                                bgcolor: 'grey.200',
                                color: 'text.primary',
                                fontSize: '0.75rem',
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
                          <Typography variant="body2" noWrap sx={{ maxWidth: 200 }}>
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
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                        <Typography variant="body2" color="text.secondary">
                          No vendors found
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            {totalPages > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={(_, value) => setPage(value)}
                  color="primary"
                  size="small"
                />
              </Box>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
