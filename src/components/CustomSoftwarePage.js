import React from 'react';
import { Link } from 'react-router-dom';

import {
  Typography, Grid, useMediaQuery, useTheme, makeStyles, Hidden, IconButton,
} from '@material-ui/core';

import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import saveEnergyImg from '../assets/bulb.svg';
import timerImg from '../assets/stopwatch.svg';
import cashImg from '../assets/cash.svg';
import documentAnimationData from '../animations/documentsAnimation/data';
import scaleAnimationData from '../animations/scaleAnimation/data.json';
import wheelAnimationData from '../animations/automationAnimation/data.json';
import mobileAnimationData from '../animations/uxAnimation/data';
import rootImg from '../assets/root.svg';

import { Routes } from './Constants';
import CallToAction from './ui/CallToAction';

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

const MiddleIcons = [
  { text: 'Save Energy.', img: saveEnergyImg },
  { text: 'Save Time.', img: timerImg },
  { text: 'Save Money.', img: cashImg },
];

const CustomSoftwarePage = (props) => {
  const { setSelectedIndex, setValue } = props;
  const theme = useTheme();
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid
          item
          container
          direction="row"
          justify={matchesMD ? 'center' : undefined}
        >
          <Hidden mdDown>
            <Grid item style={{ marginTop: '0.7em', marginLeft: '-3.5em', marginRight: '1em' }}>
              <IconButton style={{ backgroundColor: 'transparent' }} onClick={() => setSelectedIndex(0)} component={Link} to={Routes.SERVICES}>
                <img src={backArrow} alt="back arrow" />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item container direction="column" style={{ maxWidth: '40em' }}>
            <Grid item>
              <Typography variant="h2" gutterBottom align={matchesMD ? 'center' : 'inherit'}>
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align={matchesMD ? 'center' : 'inherit'} paragraph>
                Whether we’re replacing old software or inventing new solutions,
                Arc Development is here to help your business tackle technology.
              </Typography>
              <Typography variant="body1" align={matchesMD ? 'center' : 'inherit'} paragraph>
                Using regular commercial software leaves you with a lot of stuff you don’t need,
                without some of the stuff you do need, and ultimately controls the way you work.
                Without using any software at all you risk falling behind competitors and
                missing out on huge savings from increased efficiency.
              </Typography>
              <Typography variant="body1" align={matchesMD ? 'center' : 'inherit'} paragraph>
                Our custom solutions are designed from the ground up with your needs, wants,
                and goals at the core. This collaborative process produces finely tuned software
                that is much more effective at improving your workflow and reducing costs
                than generalized options.
              </Typography>
              <Typography variant="body1" align={matchesMD ? 'center' : 'inherit'} paragraph>
                We create exactly what you what, exactly how you want it.
                <Hidden mdDown>
                  <IconButton style={{ backgroundColor: 'transparent' }} onClick={() => setSelectedIndex(2)} component={Link} to={Routes.MOBILE_APPS}>
                    <img src={forwardArrow} alt="forward arrow" />
                  </IconButton>
                </Hidden>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Middle icons */}
        <Grid item container direction="row" justify="center" style={{ marginTop: matchesMD ? '10em' : '15em', marginBottom: '20em' }}>
          {MiddleIcons.map((obj) => (
            <Grid key={obj.text} item container direction="column" md style={{ maxWidth: '40em', marginTop: matchesMD ? '4em' : 0 }} alignItems="center">
              <Grid item>
                <Typography variant="h4">{obj.text}</Typography>
              </Grid>
              <Grid item style={{ marginTop: '1em' }}>
                <img src={obj.img} alt={obj.text} />
              </Grid>
            </Grid>
          ))}
        </Grid>

        {/* Animation row 1 */}
        <Grid item container direction={matchesMD ? 'column' : 'row'} justify="space-between">
          <Grid item container direction="row" md style={{ marginBottom: matchesMD ? '2em' : 0 }} justify={matchesMD ? 'center' : undefined}>
            <Grid item container direction="column" md style={{ maxWidth: '25em', textAlign: matchesSM ? 'center' : 'inherit' }}>
              <Grid item>
                <Typography variant="h4">Digital Documents & Data</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Reduce Errors. Reduce Waste. Reduce Costs.
                </Typography>
                <Typography variant="body1" paragraph>
                  Billions are spent annually on the purchasing, printing,
                  and distribution of paper.
                  On top of the massive environmental impact this has,
                  it causes harm to your bottom line as well.
                </Typography>
                <Typography variant="body1" paragraph>
                  By utilizing digital forms and documents you can remove these obsolete expenses,
                  accelerate your communication, and help the Earth.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md style={{ maxWidth: 200, maxHeight: 300, minHeight: 200 }}>
              <Lottie config={{
                loop: true,
                autoplay: true,
                animationData: documentAnimationData,
              }}
              />
            </Grid>
          </Grid>
          <Grid item container direction="row" md justify={matchesMD ? 'center' : 'flex-end'} style={{ marginTop: matchesMD ? '10em' : 0 }}>
            <Grid
              item
              md
              style={{
                maxWidth: 200, maxHeight: 200, minHeight: 150, minWidth: 100,
              }}
            >
              <Lottie config={{ loop: true, autoplay: false, animationData: scaleAnimationData }} />
            </Grid>
            <Grid item container direction="column" style={{ maxWidth: '20em', textAlign: matchesSM ? 'center' : 'right', marginTop: matchesMD ? '3em' : 0 }}>
              <Grid item>
                <Typography variant="h4">Scale</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Whether you’re a large brand, just getting started, or taking off right now,
                  our application architecture ensures pain-free growth and reliability.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Root cause */}
        <Grid item container direction="column" alignItems="center" style={{ marginTop: '10em', marginBottom: '10em' }}>
          <Grid item>
            <img src={rootImg} alt="tree root" height={matchesSM ? '300em' : '450em'} width={matchesSM ? '300em' : '400em'} />
          </Grid>
          <Grid item style={{ maxWidth: '20em' }}>
            <Typography align="center" variant="h4" gutterBottom>Root-cause Analysis</Typography>
            <Typography align="center" variant="body1" paragraph>Many problems are merely symptoms of larger, underlying issues.</Typography>
            <Typography align="center" variant="body1" paragraph>
              We can help you thoroughly examine all areas of your business
              to develop a holistic plan for the most effective implementation of technology.
            </Typography>
          </Grid>
        </Grid>

        {/* Animation row 2 */}
        <Grid item container direction={matchesMD ? 'column' : 'row'} justify="space-between">
          <Grid item container direction="row" md style={{ marginBottom: matchesMD ? '6em' : 0 }} justify={matchesMD ? 'center' : undefined}>
            <Grid item container direction="column" md style={{ maxWidth: '14em', textAlign: matchesSM ? 'center' : 'inherit' }}>
              <Grid item>
                <Typography variant="h4">Automation</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Why waste time when you don’t have to?
                </Typography>
                <Typography variant="body1" paragraph>
                  We can help you identify processes with time or event based
                  actions which can now easily be automated.
                </Typography>
                <Typography variant="body1" paragraph>
                  Increasing efficiency increases profits, leaving you more
                  time to focus on your business, not busywork.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md style={{ maxWidth: '20em', maxHeight: 300, minHeight: 200 }}>
              <Lottie config={{ loop: true, autoplay: true, animationData: wheelAnimationData }} />
            </Grid>
          </Grid>
          <Grid item container direction="row" md justify={matchesMD ? 'center' : 'flex-end'}>
            <Grid
              item
              md
              style={{
                maxWidth: '12em', maxHeight: '20em', minHeight: 150, minWidth: 100, marginBottom: matchesMD ? '3em' : 0,
              }}
            >
              <Lottie config={{
                loop: true,
                autoplay: false,
                animationData: mobileAnimationData,
              }}
              />
            </Grid>
            <Grid item container direction="column" style={{ maxWidth: '17em', textAlign: matchesSM ? 'center' : 'right' }}>
              <Grid item>
                <Typography variant="h4">User Experience Design</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  A good design that isn’t usable isn’t a good design.
                </Typography>
                <Typography variant="body1" paragraph>
                  So why are so many pieces of software complicated, confusing, and frustrating?
                </Typography>
                <Typography variant="body1" paragraph>
                  By prioritizing users and the real ways they interact with
                  technology we’re able to develop unique,
                  personable experiences that solve problems rather than create new ones.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </>
  );
};

export default CustomSoftwarePage;

CustomSoftwarePage.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};
