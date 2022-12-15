import { createTheme, ThemeProvider } from '@mui/material/styles';

const breakpoints = {
  values: {
    xs: 0,
    sm: 575,
    md: 900,
    lg: 1200,
    xl: 1536
  }
};

const theme = createTheme({
  ...breakpoints,
  palette: {},

  typography: {
    h1: {
      fontSize: 46,
      fontWeight: 'bold'
    },
    h5: {
      fontSize: 10,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: 8
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: 7
      }
    },
    h6: {
      fontSize: 8,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: 5
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: 5
      }
    },
    body1: {
      color: '#888888'
    }
  }
});
const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
