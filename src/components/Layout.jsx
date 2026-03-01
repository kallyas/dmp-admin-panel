import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DRAWER_WIDTH = 280;

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Navbar drawerWidth={DRAWER_WIDTH} onMenuClick={handleDrawerToggle} />
      <Sidebar
        drawerWidth={DRAWER_WIDTH}
        mobileOpen={mobileOpen}
        onClose={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          backgroundColor: 'background.default',
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        {children || <Outlet />}
        <Box
          component="footer"
          sx={{
            mt: 'auto',
            py: 3,
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: '0.875rem',
          }}
        >
          © Copyright {new Date().getFullYear()} <strong>Roads Links</strong>. All Rights Reserved
          <br />
          Designed by <a href="https://github.com/kallyas/">Iden</a>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
