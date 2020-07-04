import Grid from '@material-ui/core/Grid';
import React from 'react';
import {
  Hidden, IconButton, makeStyles, Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import { Routes } from '../Constants';
import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';
import CallToAction from '../ui/CallToAction';
import mobileAnimationData from '../../animations/integrationAnimation/data.json';
import extendAccessImg from '../../assets/extendAccess.svg';
import increaseEngImg from '../../assets/increaseEngagement.svg';
import extendFuncImg from '../../assets/swissKnife.svg';

const MiddleIcons = [
  { text: 'Extend Functionality', img: extendFuncImg },
  { text: 'Extend Access', img: extendAccessImg },
  { text: 'Increase Engagement', img: increaseEngImg },
];

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingRight: '5em',
    paddingBottom: '10em',
    paddingTop: '2em',
    paddingLeft: '5em',
    [(theme.breakpoints.down('sm'))]: {
      paddingRight: '1.5em',
      paddingLeft: '1.5em',
      paddingTop: '1em',
    },
  },
}));

const MobileAppsPage = (props) => {
  const classes = useStyles();
  const { setValue, setSelectedIndex } = props;
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        {/* First Hero paragraph */}
        <Grid
          item
          container
          direction="row"
          justify={matchesMD ? 'center' : undefined}
        >
          <Hidden mdDown>
            <Grid item style={{ marginTop: '0.7em', marginLeft: '-3.5em', marginRight: '1em' }}>
              <IconButton style={{ backgroundColor: 'transparent' }} onClick={() => setSelectedIndex(1)} component={Link} to={Routes.CUSTOM_SOFTWARE}>
                <img src={backArrow} alt="back arrow" />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item container direction="column" style={{ maxWidth: '40em' }}>
            <Grid item>
              <Typography variant="h2" gutterBottom align={matchesMD ? 'center' : 'inherit'}>
                iOS/Android App Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align={matchesMD ? 'center' : 'inherit'} paragraph>
                Mobile apps allow you to take your tools on the go.
              </Typography>
              <Typography variant="body1" align={matchesMD ? 'center' : 'inherit'} paragraph>
                Whether you want an app for your customers, employees, or yourself,
                we can build cross-platform native solutions for any part of your business process.
                This opens you up to a whole new world of
                possibilities by taking advantage of phone features
                like the camera, GPS, push notifications, and more.
              </Typography>
              <Typography variant="body1" align={matchesMD ? 'center' : 'inherit'} paragraph>
                Convenience. Connection.
                <Hidden mdDown>
                  <IconButton style={{ backgroundColor: 'transparent' }} onClick={() => setSelectedIndex(3)} component={Link} to={Routes.WEBSITES}>
                    <img src={forwardArrow} alt="forward arrow" />
                  </IconButton>
                </Hidden>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Second Mobile Row - 2 */}
        <Grid item container justify="center" style={{ marginTop: '5em' }}>
          <Grid item style={{ textAlign: matchesSM ? 'center' : 'inherit' }} md={3}>
            <Typography variant="h4" paragraph>
              Integration
            </Typography>
            <Typography variant="body1" paragraph>
              Our technology enables an innate interconnection between web and mobile applications,
              putting everything you need right in one convenient place.
            </Typography>
            <Typography variant="body1" paragraph>
              This allows you to extend your reach, reinvent interactions,
              and develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
          <Grid item container md={6} justify="center" style={{ marginTop: matchesSM ? '3em' : 0, marginBottom: matchesSM ? '3em' : 0 }}>
            <Lottie
              config={{ loop: true, autoplay: true, animationData: mobileAnimationData }}
              height="20em"
              width="20em"
            />
          </Grid>
          <Grid item style={{ textAlign: matchesSM ? 'center' : 'right' }} md={3}>
            <Typography variant="h4" paragraph>
              Simultaneous Platform Support
            </Typography>
            <Typography variant="body1" paragraph>
              Our cutting-edge development process allows us to create apps
              for iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography variant="body1" paragraph>
              This significantly reduces costs and creates a more unified
              brand experience across all devices.
            </Typography>
          </Grid>
        </Grid>

        {/* Middle Icon Row */}
        <Grid item container direction="row" justify="space-around" style={{ marginTop: matchesMD ? '10em' : '15em', marginBottom: '5.5em' }}>
          {MiddleIcons.map((obj) => (
            <Grid key={obj.text} item container direction="column" md style={{ maxWidth: '40em', marginTop: matchesMD ? '4em' : 0 }} alignItems="center">
              <Grid item>
                <Typography align="center" variant="h5" style={{ color: theme.palette.common.arcBlue }} gutterBottom>{obj.text}</Typography>
              </Grid>
              <Grid item style={{ marginTop: '1em' }}>
                <img src={obj.img} alt={obj.text} height="150em" width={obj.text === 'Extend Access' ? '100%' : '150em'} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </>
  );
};

MobileAppsPage.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default MobileAppsPage;
