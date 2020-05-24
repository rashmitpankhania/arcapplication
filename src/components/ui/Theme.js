import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#50cfec';
const arcOrange = '#ee9f24';

const theme = createMuiTheme({
    palette: {
        common: {
            arcBlue: arcBlue,
            arcOrange: arcOrange,
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        }
    },
    typography: {
        h3: {
            fontWeight: 300
        }
    }
});

export default theme;