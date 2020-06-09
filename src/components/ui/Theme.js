import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0a72b9';
const arcOrange = '#ee9f24';
const arcGray = 'rgba(80,77,77,0.6)';

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
    h4: {
      color: `${arcBlue}`,
    },
    subtitle1: {
      color: `${arcGray}`,
    },
  },
  learnButton: {
    borderColor: arcBlue,
    color: arcBlue,
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
});

export default theme;
