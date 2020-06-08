import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0a72b9';
const arcOrange = '#ee9f24';

const theme = createMuiTheme({
  palette: {
    common: {
      arcBlue,
      arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Raleway',
      fontSize: '2.5rem',
      fontWeight: 700,
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
  },
});

export default theme;
