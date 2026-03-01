import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  Chip,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const routeTitles = {
  '/dashboard': 'Dashboard',
  '/dashboard/vendors': 'Vendors',
  '/dashboard/add-vendor': 'Add Vendor',
  '/dashboard/staff': 'Staff',
  '/dashboard/add-staff': 'Add Staff',
  '/dashboard/routes': 'Bus Routes',
  '/dashboard/logout': 'Logout',
};

const Navbar = ({ drawerWidth, onMenuClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const open = Boolean(anchorEl);

  const currentPath = location.pathname;
  const pageTitle = routeTitles[currentPath] || 'Dashboard';

  const getBreadcrumbs = () => {
    const paths = currentPath.split('/').filter(Boolean);
    return paths.map((path, index) => {
      const fullPath = '/' + paths.slice(0, index + 1).join('/');
      const title = routeTitles[fullPath] || path.charAt(0).toUpperCase() + path.slice(1).replace('-', ' ');
      return { title, path: fullPath, isLast: index === paths.length - 1 };
    });
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar sx={{ minHeight: { xs: 64, sm: 70 } }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Page Title & Breadcrumbs */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" fontWeight={600} color="text.primary">
            {pageTitle}
          </Typography>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: 'grey.400' }} />}
            sx={{ mt: 0.25 }}
          >
            <Box
              component={Link}
              to="/dashboard"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'text.secondary',
                textDecoration: 'none',
                fontSize: '0.75rem',
                '&:hover': { color: 'primary.main' },
              }}
            >
              <HomeOutlinedIcon sx={{ fontSize: 14, mr: 0.5 }} />
              Home
            </Box>
            {getBreadcrumbs().slice(1).map((crumb) => (
              <Typography
                key={crumb.path}
                component={crumb.isLast ? 'span' : Link}
                to={crumb.path}
                sx={{
                  fontSize: '0.75rem',
                  color: crumb.isLast ? 'primary.main' : 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': crumb.isLast ? {} : { color: 'primary.main' },
                }}
              >
                {crumb.title}
              </Typography>
            ))}
          </Breadcrumbs>
        </Box>

        {/* Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Tooltip title="Notifications">
            <IconButton size="small" sx={{ color: 'grey.600' }}>
              <Badge badgeContent={3} color="error" variant="dot">
                <NotificationsNoneIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Account">
            <IconButton
              onClick={(e) => setAnchorEl(e.currentTarget)}
              size="small"
              sx={{ ml: 1 }}
            >
              <Avatar
                sx={{
                  width: 34,
                  height: 34,
                  bgcolor: 'primary.main',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}
              >
                RL
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          PaperProps={{
            sx: {
              width: 220,
              mt: 1,
            },
          }}
        >
          <Box sx={{ px: 2, py: 1.5 }}>
            <Typography variant="subtitle2" fontWeight={600}>
              Roads Links Admin
            </Typography>
            <Typography variant="caption" color="text.secondary">
              admin@roadslinks.com
            </Typography>
          </Box>
          <MenuItem onClick={() => setAnchorEl(null)} sx={{ py: 1 }}>
            <ListItemIcon>
              <PersonOutlineIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body2">My Profile</Typography>
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)} sx={{ py: 1 }}>
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body2">Settings</Typography>
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)} sx={{ py: 1 }}>
            <ListItemIcon>
              <HelpOutlineIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body2">Help Center</Typography>
          </MenuItem>
          <Box sx={{ my: 1, borderTop: 1, borderColor: 'divider' }} />
          <MenuItem
            component={Link}
            to="/dashboard/logout"
            onClick={() => setAnchorEl(null)}
            sx={{ py: 1, color: 'error.main' }}
          >
            <ListItemIcon>
              <LogoutOutlinedIcon fontSize="small" sx={{ color: 'error.main' }} />
            </ListItemIcon>
            <Typography variant="body2">Sign Out</Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
