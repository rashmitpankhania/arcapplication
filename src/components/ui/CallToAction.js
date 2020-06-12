import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';

import { useMediaQuery } from '@material-ui/core';
import { Routes } from '../Constants';
import ButtonArrow from './ButtonArrow';
import callToActionBackground from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: '40em',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${callToActionBackground})`,
    // backgroundAttachment: 'fixed',
    [(theme.breakpoints.down('md'))]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherits',
      textAlign: 'center',
    },
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButton: {
    ...theme.learnButton,
    fontSize: '0.7rem',
    height: 35,
    width: 140,
  },
}));

const CallToAction = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container className={classes.mainContainer} justify={matchesSM ? 'space-evenly' : 'space-between'} alignItems="center" direction={matchesSM ? 'column' : 'row'}>
      <Grid item style={{ marginLeft: matchesSM ? 0 : '5em' }}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
          </Grid>
          <Typography variant="subtitle1" style={{ color: 'white' }}>
            Take advantage of the
            <br />
            21st Century.
          </Typography>
          <Grid item>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginRight: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : 'inherit' }}>
        <Button disableElevation variant="contained" component={Link} to={Routes.ESTIMATE} color="secondary" className={classes.button}>
          Free
          Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
