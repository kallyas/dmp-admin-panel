import { useLocation, Link } from 'react-router-dom';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  alpha,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import BadgeIcon from '@mui/icons-material/BadgeOutlined';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBusOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';

const mainMenuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
];

const managementMenuItems = [
  { text: 'Vendors', icon: <PeopleIcon />, path: '/dashboard/vendors' },
  { text: 'Staff', icon: <BadgeIcon />, path: '/dashboard/staff' },
  { text: 'Bus Routes', icon: <DirectionsBusIcon />, path: '/dashboard/routes' },
];

const Sidebar = ({ drawerWidth, mobileOpen, onClose }) => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(path);
  };

  const NavItem = ({ item }) => (
    <ListItem disablePadding sx={{ mb: 0.5 }}>
      <ListItemButton
        component={Link}
        to={item.path}
        selected={isActive(item.path)}
        sx={{
          mx: 1.5,
          px: 1.5,
          py: 1,
          borderRadius: 1,
          '&.Mui-selected': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
            '& .MuiListItemIcon-root': {
              color: 'primary.main',
            },
            '& .MuiListItemText-primary': {
              color: 'primary.main',
              fontWeight: 600,
            },
          },
          '&:hover': {
            bgcolor: 'grey.100',
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 36,
            color: isActive(item.path) ? 'primary.main' : 'grey.500',
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.text}
          primaryTypographyProps={{
            fontSize: '0.8125rem',
            fontWeight: isActive(item.path) ? 600 : 500,
          }}
        />
      </ListItemButton>
    </ListItem>
  );

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Logo */}
      <Box sx={{ px: 2.5, py: 2.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: 1,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'primary.main',
          }}
        >
          <img
            src="/roadslinks_logo.png"
            alt="Logo"
            style={{ width: 28, height: 28, objectFit: 'contain' }}
          />
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={700} color="text.primary" lineHeight={1.2}>
            Roads Links
          </Typography>
          <Typography variant="caption" color="text.secondary" lineHeight={1}>
            Admin Panel
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mx: 2 }} />

      {/* Main Menu */}
      <Box sx={{ pt: 2 }}>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ px: 3, pb: 1 }}
        >
          Overview
        </Typography>
        <List disablePadding>
          {mainMenuItems.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </List>
      </Box>

      {/* Management Menu */}
      <Box sx={{ pt: 2 }}>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ px: 3, pb: 1 }}
        >
          Management
        </Typography>
        <List disablePadding>
          {managementMenuItems.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </List>
      </Box>

      {/* Spacer */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Logout */}
      <Box sx={{ pb: 2 }}>
        <Divider sx={{ mx: 2, mb: 2 }} />
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/dashboard/logout"
              sx={{
                mx: 1.5,
                px: 1.5,
                py: 1,
                borderRadius: 1,
                color: 'error.main',
                '&:hover': {
                  bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, color: 'error.main' }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                primaryTypographyProps={{ fontSize: '0.8125rem', fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
