import React from 'react';
import { Lottie } from '@crello/react-lottie';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import animationData from '../../animations/landinganimation/data';
import ButtonArrow from '../ui/ButtonArrow';
import revolutionBackground from '../../assets/repeatingBackground.svg';
import infoBackground from '../../assets/infoBackground.svg';
import { Routes } from '../Constants';
import CallToAction from '../ui/CallToAction';
import Services from '../ui/Services';


const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '20em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: 50,
    height: 40,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1.25em',
  },
  learnButtonHero: {
    ...theme.learnButton,
    fontSize: '0.9rem',
    height: 40,
    width: 145,
  },
  learnButton: {
    ...theme.learnButton,
    fontSize: '0.7rem',
    height: 35,
    width: 140,
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  textContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  revolutionCard: {
    boxShadow: theme.shadows[10],
    position: 'absolute',
    padding: '6em',
    paddingTop: '3em',
    paddingBottom: '3em',
    borderRadius: 15,
    [theme.breakpoints.down('sm')]: {
      borderRadius: 0,
    },
  },
  revolutionImgContainer: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  },
  infoContainer: {
    position: 'absolute',
    textAlign: 'inherit',
  },
  infoImgBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const { setValue, setSelectedIndex } = props;

  let margin;
  if (matchesXS) {
    margin = 0;
  } else if (matchesSM) {
    margin = '2em';
  } else {
    margin = '5em';
  }
  return (
    <Grid container direction="column" className={classes.mainContainer}>

      {/* Hero Block */}
      <Grid item>
        <Grid container justify="flex-end" alignItems="center">
          <Grid sm item className={classes.textContainer}>
            <Typography align="center" variant="h2">
              Bringing west coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid container justify="center" className={classes.buttonContainer}>
              <Grid item>
                <Button
                  onClick={() => setValue(5)}
                  component={Link}
                  to={Routes.ESTIMATE}
                  className={classes.estimateButton}
                  variant="contained"
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => setValue(2)}
                  component={Link}
                  to={Routes.REVOLUTION}
                  variant="outlined"
                  className={classes.learnButtonHero}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie
              config={{ loop: true, autoplay: true, animationData }}
              height="100%"
              width="100%"
            />
          </Grid>
        </Grid>
      </Grid>

      <Services setSelectedIndex={setSelectedIndex} setValue={setValue} />

      {/* Revolution Block */}
      <Grid item>
        <Grid container justify="center" alignItems="center" style={{ height: '50em', marginTop: '12em' }}>
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction="column">
                <Grid item style={{ textAlign: 'center' }}>
                  <Typography variant="h3" gutterBottom>The Revolution</Typography>
                </Grid>
                <Grid item style={{ textAlign: 'center' }}>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    <br />
                    recipe for revolution
                  </Typography>
                  <Button
                    onClick={() => setValue(2)}
                    component={Link}
                    to={Routes.REVOLUTION}
                    variant="outlined"
                    className={classes.learnButton}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionImgContainer} />
        </Grid>
      </Grid>

      {/* Info Block */}
      <Grid item>
        <Grid container style={{ height: '50em' }} alignItems="center">
          <Grid item container className={classes.infoContainer} direction={matchesXS ? 'column' : 'row'}>
            <Grid item sm style={{ marginLeft: margin, textAlign: matchesXS ? 'center' : 'left' }}>
              <Grid container direction="column" style={{ marginBottom: matchesXS ? '10em' : 0 }}>
                <Grid item>
                  <Typography variant="h4" style={{ color: 'white' }}>About Us</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" style={{ color: 'white' }}>Let&apos;s get personal.</Typography>
                  <Button
                    onClick={() => setValue(3)}
                    component={Link}
                    to={Routes.ABOUT_US}
                    variant="outlined"
                    className={classes.learnButton}
                    style={{ borderColor: 'white', color: 'white' }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm style={{ marginRight: margin, textAlign: matchesXS ? 'center' : 'right' }}>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h4" style={{ color: 'white' }}>Contact Us</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" style={{ color: 'white' }}>Say hello!!</Typography>
                  <Button
                    onClick={() => setValue(4)}
                    component={Link}
                    to={Routes.CONTACT_US}
                    variant="outlined"
                    className={classes.learnButton}
                    style={{ borderColor: 'white', color: 'white' }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.infoImgBackground} />
        </Grid>
      </Grid>

      {/* Call to Action Block */}
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;

LandingPage.propTypes = {
  setValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};
