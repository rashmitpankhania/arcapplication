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
import animationData from '../animations/landinganimation/data';
import ButtonArrow from './ui/ButtonArrow';
import customSoftware from '../assets/Custom Software Icon.svg';
import mobileApps from '../assets/mobileIcon.svg';
import websites from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';

import { PageNames } from './Constants';


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
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
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
                <Button className={classes.estimateButton} variant="contained">Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
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

      {/* Custom Software Block */}
      <Grid item>
        <Grid container style={{ marginTop: '12em', padding: matchesSM ? '1em' : 0 }} justify={matchesSM ? 'center' : undefined}>
          <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}>
            <Typography variant="h4">
              {PageNames.CUSTOM_SOFTWARE}
            </Typography>
            <Typography variant="subtitle1">
              Save Energy.Save Time.Save Money
            </Typography>
            <Typography variant="subtitle1" style={{ marginTop: '1em' }}>
              Complete Digital Solution from investigation
              {' '}
              <br />
              to
              {' '}
              <span style={{ color: theme.palette.common.arcOrange, fontFamily: 'Pacifico' }}>
                celebration
              </span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} />
            </Button>
          </Grid>
          <Grid item>
            <img src={customSoftware} alt="custom software" style={{ marginLeft: '2em', marginTop: matchesSM ? '1em' : undefined }} />
          </Grid>
        </Grid>
      </Grid>

      {/* Mobile Apps Block */}
      <Grid item>
        <Grid container style={{ marginTop: '12em', padding: matchesSM ? '1em' : 0 }} justify={matchesSM ? 'center' : 'flex-end'}>
          <Grid item style={{ textAlign: matchesSM ? 'center' : undefined }}>
            <Typography variant="h4">
              {PageNames.MOBILE_APPS}
            </Typography>
            <Typography variant="subtitle1">
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1" style={{ marginTop: '1em' }}>
              Integrate your web experience or create a standalone app
              <br />
              with either mobile platform.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img src={mobileApps} alt="mobile apps" style={{ marginTop: matchesSM ? '1em' : undefined }} />
          </Grid>
        </Grid>
      </Grid>

      {/* Websites Block */}
      <Grid item>
        <Grid container style={{ marginTop: '12em', padding: matchesSM ? '1em' : 0 }} justify={matchesSM ? 'center' : undefined}>
          <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}>
            <Typography variant="h4">
              {PageNames.WEBSITES}
            </Typography>
            <Typography variant="subtitle1">
              Reach more. Discover more. Sell more.
            </Typography>
            <Typography variant="subtitle1" style={{ marginTop: '1em' }}>
              Optimized for search engines
              <br />
              built for speed.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} />
            </Button>
          </Grid>
          <Grid item>
            <img src={websites} alt="websites" style={{ marginLeft: matchesSM ? 0 : '2em', marginTop: matchesSM ? '1em' : undefined }} />
          </Grid>
        </Grid>
      </Grid>

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
                  <Button variant="outlined" className={classes.learnButton}>
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
    </Grid>
  );
};

export default LandingPage;
