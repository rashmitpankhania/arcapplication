import PropTypes from 'prop-types';
import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CallToAction from '../ui/CallToAction';
import historyImg from '../../assets/history.svg';
import profileImg from '../../assets/rashmit.png';
import blogImg from '../../assets/yearbook.svg';
import puppyImg from '../../assets/puppy.svg';

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
      paddingBottom: '5em',
    },
  },
  aboutUsPara: {
    alignSelf: 'center',
    padding: '5em 4em 5em 4em',
  },
}));
const AboutUsPage = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const { setSelectedIndex, setValue } = props;
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md')); return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        {/* About Us */}
        <Grid item container>
          <Grid item>
            <Typography variant="h2">
              About Us
            </Typography>
          </Grid>
          <Grid
            item
            className={classes.aboutUsPara}
          >
            <Typography align="center" color="primary" paragraph style={{ lineHeight: 1.5, fontStyle: 'italic', fontSize: '1.5rem' }}>
              Whether it be person to person, business to consumer, or an individual to their
              interests,
              technology is meant to bring us closer to what we care about in the best way possible.
              Arc Development will use that principle to provide fast, modern, inexpensive,
              and aesthetic software to the Midwest and beyond.
            </Typography>
          </Grid>
        </Grid>
        {/* History */}
        <Grid item container direction={matchesMD ? 'column-reverse' : 'row'} justify={matchesMD ? undefined : 'space-between'} alignItems="center">
          <Grid item style={{ marginRight: matchesMD ? 0 : '5em', marginBottom: matchesMD ? '5em' : 0, maxWidth: '35em' }}>
            <Typography paragraph align={matchesMD ? 'center' : 'inherit'} variant="h2">
              History
            </Typography>
            <Typography paragraph align={matchesMD ? 'center' : 'inherit'} variant="body1">
              We’re the new kid on the block.
            </Typography>
            <Typography paragraph align={matchesMD ? 'center' : 'inherit'} variant="body1">
              Founded in 2019, we’re ready to get our hands on the world’s business problems.
            </Typography>
            <Typography paragraph align={matchesMD ? 'center' : 'inherit'} variant="body1">
              It all started with one question: Why aren’t all businesses using available technology? There are many different answers to that question: economic barriers, social barriers, educational barriers, and sometimes institutional barriers.
            </Typography>
            <Typography paragraph align={matchesMD ? 'center' : 'inherit'} variant="body1">
              We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full advantage of these advancements is the name of the game.
            </Typography>
            <Typography paragraph align={matchesMD ? 'center' : 'inherit'} variant="body1">
              All this change can be a lot to keep up with, and that’s where we come in.
            </Typography>
          </Grid>
          <Grid item style={{ alignSelf: 'center' }}>
            <img src={historyImg} alt="book with feather pen" style={{ maxWidth: matchesSM ? 300 : '30em' }} />
          </Grid>
        </Grid>
        {/* Team */}
      </Grid>
      <Grid container direction={matchesSM ? 'column' : 'row'} justify="space-between" style={{ paddingBottom: '10em' }} alignItems="center">
        <Grid item style={{ alignSelf: 'center', paddingTop: matchesSM ? 0 : '30em' }}>
          <figure>
            <img src={blogImg} alt="yearbook" style={{ maxWidth: matchesSM ? 200 : '15em' }} />
            <figcaption style={{ color: 'gray', textAlign: 'center' }}>a pic from my sophomore yearbook</figcaption>
          </figure>
        </Grid>
        <Grid
          item
          container
          direction="column"
          style={{
            maxWidth: '30em', marginTop: matchesSM ? '4em' : 0, marginBottom: matchesSM ? '4em' : 0, paddingLeft: matchesSM ? '1em' : 0, paddingRight: matchesSM ? '1em' : 0,
          }}
        >
          <Grid item>
            <Typography variant="h2" paragraph gutterBottom align="center">Team</Typography>
            <Typography variant="body1" paragraph align="center">Rashmit Pankhania</Typography>
            <Typography variant="body1" paragraph align="center">I started coding when i joined Electrical Engineering</Typography>
          </Grid>
          <Grid item style={{ alignSelf: 'center' }}>
            <Avatar src={profileImg} alt="me posing" style={{ height: '10em', width: '10em' }} />
          </Grid>
          <Grid item style={{ marginTop: '1em' }}>
            <Typography variant="body1" paragraph align="center">
              I taught myself basic coding from a library book in my very first year, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ alignSelf: 'center', paddingTop: matchesSM ? 0 : '30em' }}>
          <figure>
            <img src={puppyImg} alt="puppy" style={{ maxWidth: matchesSM ? 200 : '15em' }} />
            <figcaption style={{ color: 'gray', textAlign: 'center' }}>my another teammate</figcaption>
          </figure>
        </Grid>
      </Grid>
      <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </>
  );
};

AboutUsPage.propTypes = {
  setValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default AboutUsPage;
