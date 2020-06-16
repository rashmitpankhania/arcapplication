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
import rootImg from '../assets/root.svg';

import { Routes } from './Constants';

const useStyles = makeStyles(() => ({
  mainContainer: {
    paddingRight: '5em',
    paddingBottom: '10em',
    paddingTop: '2em',
    paddingLeft: '5em',
  },
}));

const MiddleIcons = [
  { text: 'Save Energy.', img: saveEnergyImg },
  { text: 'Save Time.', img: timerImg },
  { text: 'Save Money.', img: cashImg },
];

const CustomSoftwarePage = (props) => {
  const { setSelectedIndex } = props;
  const theme = useTheme();
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction="column" className={classes.mainContainer} alignItems={matchesSM ? 'center' : undefined}>
      <Grid
        item
        container
        direction="row"
        style={{
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
        <Hidden smDown>
          <Grid item style={{ marginTop: '0.7em', marginLeft: '-3.5em', marginRight: '1em' }}>
            <IconButton style={{ backgroundColor: 'transparent' }} onClick={() => setSelectedIndex(0)} component={Link} to={Routes.SERVICES}>
              <img src={backArrow} alt="back arrow" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" style={{ maxWidth: '40em', margin: matchesSM ? '1em' : 0 }}>
          <Grid item>
            <Typography variant="h2">
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph style={{ lineHeight: 1.25 }}>
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography variant="body1" paragraph>
              Using regular commercial software leaves you with a lot of stuff you don’t need,
              without some of the stuff you do need, and ultimately controls the way you work.
              Without using any software at all you risk falling behind competitors and
              missing out on huge savings from increased efficiency.
            </Typography>
            <Typography variant="body1" paragraph>
              Our custom solutions are designed from the ground up with your needs, wants,
              and goals at the core. This collaborative process produces finely tuned software
              that is much more effective at improving your workflow and reducing costs
              than generalized options.
            </Typography>
            <Typography variant="body1" paragraph>
              We create exactly what you what, exactly how you want it.
              <Hidden smDown>
                <IconButton style={{ backgroundColor: 'transparent' }} onClick={() => setSelectedIndex(2)} component={Link} to={Routes.MOBILE_APPS}>
                  <img src={forwardArrow} alt="forward arrow" />
                </IconButton>
              </Hidden>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Middle icons */}
      <Grid item container direction="row" justify="center" style={{ marginTop: '15em', marginBottom: '20em' }}>
        {MiddleIcons.map((obj) => (
          <Grid key={obj.text} item container direction="column" md style={{ maxWidth: '40em' }} alignItems="center">
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
      <Grid item container direction="row">
        <Grid item container direction="row" md>
          <Grid item container direction="column" md style={{ maxWidth: '25em' }}>
            <Grid item>
              <Typography variant="h4">Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography variant="body1" paragraph>
                Billions are spent annually on the purchasing, printing, and distribution of paper.
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
            <Lottie config={{ loop: true, autoplay: true, animationData: documentAnimationData }} />
          </Grid>
        </Grid>
        <Grid item container direction="row" md justify="flex-end">
          <Grid
            item
            md
            style={{
              maxWidth: 200, maxHeight: 200, minHeight: 150, minWidth: 100,
            }}
          >
            <Lottie config={{ loop: true, autoplay: false, animationData: scaleAnimationData }} />
          </Grid>
          <Grid item container direction="column" style={{ maxWidth: '20em', textAlign: 'right' }}>
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

    </Grid>
  );
};

export default CustomSoftwarePage;

CustomSoftwarePage.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
};
