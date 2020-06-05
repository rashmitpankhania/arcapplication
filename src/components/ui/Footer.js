import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

// eslint-disable-next-line import/named
import { ServicesMenu } from './Header';
import { PageNames, Routes, SocialMediaLinks } from '../Constants';

const RevolutionMenu = [
  { name: PageNames.REVOLUTION, route: Routes.REVOLUTION },
  { name: PageNames.VISION, route: Routes.VISION },
  { name: PageNames.TECHNOLOGY, route: Routes.TECHNOLOGY },
  { name: PageNames.PROCESS, route: Routes.PROCESS },
];

const AboutUsMenu = [
  { name: PageNames.ABOUT_US, route: Routes.ABOUT_US },
  { name: PageNames.HISTORY, route: Routes.HISTORY },
  { name: PageNames.TEAM, route: Routes.TEAM },
];

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.arcBlue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
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
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      width: '2.5em',
    },
  },
  iconContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const { setValue, setSelectedIndex } = props;
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container className={classes.mainContainer} justify="center">
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                onClick={() => setValue(0)}
                item
                className={classes.link}
                component={Link}
                to={Routes.HOME}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              {ServicesMenu.map((obj) => (
                <Grid
                  onClick={() => {
                    setValue(obj.activeIndex);
                    setSelectedIndex(obj.selectedIndex);
                  }}
                  key={obj.name}
                  item
                  className={classes.link}
                  component={Link}
                  to={obj.route}
                >
                  {obj.name}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              {RevolutionMenu.map((obj) => (
                <Grid
                  onClick={() => setValue(2)}
                  key={obj.name}
                  item
                  className={classes.link}
                  component={Link}
                  to={Routes.REVOLUTION}
                >
                  {obj.name}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              {AboutUsMenu.map((obj) => (
                <Grid
                  onClick={() => setValue(3)}
                  key={obj.name}
                  item
                  className={classes.link}
                  component={Link}
                  to={Routes.ABOUT_US}
                >
                  {obj.name}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                onClick={() => setValue(4)}
                item
                className={classes.link}
                component={Link}
                to={Routes.CONTACT_US}
              >
                Contact us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img src={footerAdornment} alt="black sexy slash" className={classes.adornment} />
      <Grid container className={classes.iconContainer} justify="flex-end" spacing={3}>
        <Grid item component="a" href={SocialMediaLinks.FACEBOOK} rel="noopener noreferrer" target="_blank">
          <img src={facebook} alt="facebook logo" className={classes.icon} />
        </Grid>
        <Grid item component="a" href={SocialMediaLinks.TWITTER} rel="noopener noreferrer" target="_blank">
          <img src={twitter} alt="twitter logo" className={classes.icon} />
        </Grid>
        <Grid item component="a" href={SocialMediaLinks.INSTAGRAM} rel="noopener noreferrer" target="_blank">
          <img src={instagram} alt="instagram logo" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  setValue: PropTypes.func,
  setSelectedIndex: PropTypes.func,
};

Footer.defaultProps = {
  setValue: undefined,
  setSelectedIndex: undefined,
};
