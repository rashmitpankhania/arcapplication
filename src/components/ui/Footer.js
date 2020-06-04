import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import footerAdornment from '../../assets/Footer Adornment.svg';
// eslint-disable-next-line import/named
import { ServicesMenu } from './Header';

const RevolutionMenu = [
  'The Revolution', 'Vision', 'Technology', 'Process',
];

const AboutUsMenu = [
  'About Us', 'History', 'Team',
];

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.arcBlue,
    width: '100%',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
    zIndex: 1302,
    position: 'relative',
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container className={classes.mainContainer} justify="center">
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>Home</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            {ServicesMenu.map((obj) => (
              <Grid item className={classes.link}>{obj.name}</Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            {RevolutionMenu.map((name) => (
              <Grid item className={classes.link}>{name}</Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            {AboutUsMenu.map((name) => (
              <Grid item className={classes.link}>{name}</Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>Contact us</Grid>
          </Grid>
        </Grid>
      </Grid>
      <img src={footerAdornment} alt="black sexy slash" className={classes.adornment} />
    </footer>
  );
};

export default Footer;
