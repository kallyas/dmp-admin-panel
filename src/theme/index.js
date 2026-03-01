import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4154f1',
      light: '#717ff5',
      dark: '#2c3cb8',
      contrastText: '#fff',
    },
    secondary: {
      main: '#2eca6a',
      light: '#5cd68a',
      dark: '#1f8c4a',
      contrastText: '#fff',
    },
    error: {
      main: '#e74c3c',
    },
    warning: {
      main: '#ff771d',
    },
    info: {
      main: '#0dcaf0',
    },
    success: {
      main: '#2eca6a',
    },
    background: {
      default: '#f6f9ff',
      paper: '#fff',
    },
    text: {
      primary: '#012970',
      secondary: '#444444',
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Nunito", "Poppins", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#012970',
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#012970',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#012970',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#012970',
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      color: '#012970',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#012970',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 0 30px rgba(1, 41, 112, 0.1)',
          borderRadius: 8,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#fff',
          borderRight: '1px solid #e6e9ed',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#012970',
          boxShadow: '0px 0 30px rgba(1, 41, 112, 0.1)',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#f6f9ff',
          '& .MuiTableCell-head': {
            fontWeight: 600,
            color: '#012970',
          },
        },
      },
    },
  },
});

export default theme;
