import { createTheme, alpha } from '@mui/material/styles';

const primaryColor = '#0891b2'; // Cyan-600
const secondaryColor = '#0d9488'; // Teal-600

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      light: '#22d3ee',
      dark: '#0e7490',
      contrastText: '#fff',
    },
    secondary: {
      main: secondaryColor,
      light: '#14b8a6',
      dark: '#0f766e',
      contrastText: '#fff',
    },
    error: {
      main: '#dc2626',
      light: '#ef4444',
      dark: '#b91c1c',
    },
    warning: {
      main: '#d97706',
      light: '#f59e0b',
      dark: '#b45309',
    },
    info: {
      main: '#0284c7',
      light: '#0ea5e9',
      dark: '#0369a1',
    },
    success: {
      main: '#059669',
      light: '#10b981',
      dark: '#047857',
    },
    grey: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    background: {
      default: '#f1f5f9',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
      disabled: '#94a3b8',
    },
    divider: '#e2e8f0',
    action: {
      hover: alpha(primaryColor, 0.04),
      selected: alpha(primaryColor, 0.08),
      focus: alpha(primaryColor, 0.12),
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '1.875rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.5,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.8125rem',
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
      color: '#64748b',
    },
    button: {
      fontSize: '0.8125rem',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 6,
  },
  shadows: [
    'none',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    ...Array(18).fill('none'),
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '6px',
            height: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#cbd5e1',
            borderRadius: '3px',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 6,
          padding: '8px 16px',
        },
        sizeSmall: {
          padding: '6px 12px',
          fontSize: '0.75rem',
        },
        sizeLarge: {
          padding: '12px 24px',
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          border: '1px solid #e2e8f0',
          borderRadius: 8,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '16px 20px',
          borderBottom: '1px solid #e2e8f0',
        },
        title: {
          fontSize: '0.9375rem',
          fontWeight: 600,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '20px',
          '&:last-child': {
            paddingBottom: '20px',
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            backgroundColor: '#f8fafc',
            fontWeight: 600,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#64748b',
            borderBottom: '1px solid #e2e8f0',
            padding: '12px 16px',
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root': {
            '&:hover': {
              backgroundColor: '#f8fafc',
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '0.8125rem',
          padding: '12px 16px',
          borderBottom: '1px solid #f1f5f9',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#e2e8f0',
            },
            '&:hover fieldset': {
              borderColor: '#cbd5e1',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.8125rem',
          fontWeight: 500,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e2e8f0',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#1e293b',
          borderBottom: '1px solid #e2e8f0',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          marginBottom: 2,
          '&.Mui-selected': {
            backgroundColor: alpha(primaryColor, 0.1),
            color: primaryColor,
            '&:hover': {
              backgroundColor: alpha(primaryColor, 0.15),
            },
            '& .MuiListItemIcon-root': {
              color: primaryColor,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: '0.75rem',
        },
        sizeSmall: {
          height: 24,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontSize: '0.8125rem',
        },
        standardSuccess: {
          backgroundColor: '#ecfdf5',
          color: '#047857',
        },
        standardError: {
          backgroundColor: '#fef2f2',
          color: '#b91c1c',
        },
        standardWarning: {
          backgroundColor: '#fffbeb',
          color: '#b45309',
        },
        standardInfo: {
          backgroundColor: '#f0f9ff',
          color: '#0369a1',
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root': {
            fontSize: '0.8125rem',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 8,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontWeight: 600,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          fontWeight: 600,
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: '#f1f5f9',
        },
      },
    },
  },
});

export default theme;
