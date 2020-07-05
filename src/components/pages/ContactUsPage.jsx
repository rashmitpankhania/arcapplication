import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import useTheme from '@material-ui/styles/useTheme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import CallToAction from '../ui/CallToAction';
import phoneImg from '../../assets/phone.svg';
import emailImg from '../../assets/email.svg';
import sendIcon from '../../assets/send.svg';


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: '2em',
    paddingLeft: '3em',
    paddingRight: '3em',
    paddingBottom: '2em',
    [(theme.breakpoints.down('sm'))]: {
      paddingLeft: '1em',
      paddingTop: '1em',
      paddingRight: '1em',
      paddingBottom: '1em',
    },
  },
  sendButton: {
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    borderRadius: '2em',
    height: '3.5em',
    fontFamily: 'Pacifico',
    color: 'white',
    textTransform: 'none',
  },
}));

const ContactUsPage = (props) => {
  const { setSelectedIndex, setValue } = props;
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item lg={4} container direction="column" className={classes.mainContainer}>
          <Grid item>
            <Typography variant="h2">Contact Us</Typography>
            <Typography variant="h6" color="primary">We&apos;re waiting.</Typography>
          </Grid>
          <Grid item style={{ marginTop: '1.5em' }}>
            <span style={{ color: theme.palette.common.arcBlue }}>
              <img src={phoneImg} alt="phone" />
              &nbsp;
              917-367-0547
            </span>
          </Grid>
          <Grid item style={{ marginTop: '1em' }}>
            <span style={{ color: theme.palette.common.arcBlue }}>
              <img src={emailImg} alt="email" />
              &nbsp;
              rashmitpankhania@gmail.com
            </span>
          </Grid>
          <Grid item style={{ marginTop: '1em' }}>
            <TextField id="standard-name" label="Name" fullWidth placeholder="John Doe" />
          </Grid>
          <Grid item style={{ marginTop: '1em' }}>
            <TextField id="standard-phone" label="Phone Number" type="number" fullWidth placeholder="917-367-0547" />
          </Grid>
          <Grid item style={{ marginTop: '1em' }}>
            <TextField id="standard-email" label="Email" type="email" fullWidth placeholder="rashmitpankhania@gmail.com" />
          </Grid>
          <Grid item style={{ marginTop: '1em' }}>
            <TextField id="outlined-message" variant="outlined" multiline rows={4} fullWidth placeholder="Hello! We have an idea that we'd just love to share." />
          </Grid>
          <Grid item style={{ alignSelf: 'center', marginTop: '2em' }}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.sendButton}
            >
              <span>
                Send Message&nbsp;&nbsp;&nbsp;
                <img src={sendIcon} alt="send" />
              </span>
            </Button>
          </Grid>
        </Grid>
        <Grid item container lg={8}>
          <CallToAction setSelectedIndex={setSelectedIndex} setValue={setValue} />
        </Grid>
      </Grid>
    </>
  );
};

ContactUsPage.propTypes = {
  setValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default ContactUsPage;
