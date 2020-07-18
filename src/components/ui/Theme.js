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
      color: 'white',
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
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      color: arcBlue,
      fontSize: '2em',
    },
    h4: {
      color: arcBlue,
    },
    h6: {
      fontWeight: 500,
      fontFamily: 'Raleway',
      color: arcBlue,
    },
    subtitle1: {
      color: arcGray,
    },
    body1: {
      fontSize: '1 rem',
      fontFamily: 'Raleway',
      color: arcGray,
      lineHeight: 1.25,
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
  overrides: {
    MuiInput: {
      input: {
        fontFamily: 'Roboto',
      },
    },
  },
});

export default theme;
