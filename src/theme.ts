import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Proxima Nova, sans-serif',
  },
});

export default theme;
