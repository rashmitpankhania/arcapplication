import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import useTheme from '@material-ui/styles/useTheme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

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
      paddingLeft: '1.5em',
      paddingTop: '1em',
      paddingRight: '1.5em',
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
  const [name, setName] = React.useState('');

  const [phone, setPhone] = React.useState('');
  const [phoneHelper, setPhoneHelper] = React.useState('');

  const [email, setEmail] = React.useState('');
  const [emailHelper, setEmailHelper] = React.useState('');

  const [message, setMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const rePhone = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

  const handleChange = (event) => {
    switch (event.target.id) {
      case 'name':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        if (reEmail.test(event.target.value) === false) setEmailHelper('Please Enter a valid Email address.');
        else if (email === '') setEmailHelper('Email address is required.');
        else setEmailHelper('');
        break;
      case 'phone':
        setPhone(event.target.value);
        if (rePhone.test(event.target.value) === false) setPhoneHelper('Please Enter a valid Phone number.');
        else setPhoneHelper('');
        break;
      case 'message':
        setMessage(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xl={3} lg={4} container direction="column" className={classes.mainContainer}>
          <Grid item>
            <Typography variant="h2">Contact Us</Typography>
            <Typography variant="h6" color="primary">We&apos;re waiting.</Typography>
          </Grid>
          <Grid item style={{ marginTop: '1.5em' }}>
            <a href="tel:9173670547" style={{ textDecoration: 'none' }}>
              <span style={{ color: theme.palette.common.arcBlue }}>
                <img src={phoneImg} alt="phone" style={{ verticalAlign: 'bottom' }} />
                &nbsp;
                917-367-0547
              </span>
            </a>
          </Grid>
          <Grid item style={{ marginTop: '1em' }}>
            <a href="mailto:rashmitpankhania@gmail.com" style={{ textDecoration: 'none' }}>
              <span style={{ color: theme.palette.common.arcBlue }}>
                <img src={emailImg} alt="email" style={{ verticalAlign: 'middle' }} />
                &nbsp;
                rashmitpankhania@gmail.com
              </span>
            </a>
          </Grid>
          <Grid item style={{ marginTop: '1em' }}>
            <TextField id="name" label="Name" value={name} fullWidth placeholder="John Doe" onChange={handleChange} />
          </Grid>
          <Grid item style={{ marginTop: '1em' }}>
            <TextField id="phone" label="Phone Number" value={phone} error={phoneHelper !== ''} helperText={phoneHelper} onChange={handleChange} fullWidth placeholder="917-367-0547" />
          </Grid>
          <Grid item style={{ marginTop: '1em' }}>
            <TextField id="email" label="Email" type="email" error={emailHelper !== ''} helperText={emailHelper} value={email} onChange={handleChange} fullWidth placeholder="rashmitpankhania@gmail.com" />
          </Grid>
          <Grid item style={{ marginTop: '1em' }}>
            <TextField id="message" variant="outlined" value={message} onChange={handleChange} multiline rows={4} fullWidth placeholder="Hello! We have an idea that we'd just love to share." />
          </Grid>
          <Grid item style={{ alignSelf: 'center', marginTop: '2em' }}>
            <Button
              disabled={name === '' || message === '' || phoneHelper !== '' || emailHelper !== '' || email === '' || phone === ''}
              variant="contained"
              color="secondary"
              className={classes.sendButton}
              type="submit"
              onClick={() => setOpen(true)}
            >
              <span>
                Send Message&nbsp;&nbsp;&nbsp;
                <img src={sendIcon} alt="send" />
              </span>
            </Button>
          </Grid>
        </Grid>
        <Grid item container xl={9} lg={8}>
          <CallToAction setSelectedIndex={setSelectedIndex} setValue={setValue} classname={{ height: '45em' }} />
        </Grid>
      </Grid>
      <Dialog style={{ zIndex: theme.zIndex.modal + 2 }} PaperProps={{ style: { paddingBottom: '2em' } }} fullWidth open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center">Confirm Message</Typography>
            </Grid>
            <Grid item style={{ marginTop: '1em' }}>
              <TextField id="name" label="Name" value={name} fullWidth placeholder="John Doe" onChange={handleChange} />
            </Grid>
            <Grid item style={{ marginTop: '1em' }}>
              <TextField id="phone" label="Phone Number" value={phone} error={phoneHelper !== ''} helperText={phoneHelper} onChange={handleChange} fullWidth placeholder="917-367-0547" />
            </Grid>
            <Grid item style={{ marginTop: '1em' }}>
              <TextField id="email" label="Email" type="email" error={emailHelper !== ''} helperText={emailHelper} value={email} onChange={handleChange} fullWidth placeholder="rashmitpankhania@gmail.com" />
            </Grid>
            <Grid item style={{ marginTop: '1em' }}>
              <TextField id="message" variant="outlined" value={message} onChange={handleChange} multiline rows={4} fullWidth placeholder="Hello! We have an idea that we'd just love to share." />
            </Grid>
            <Grid item container justify="space-evenly" style={{ marginTop: '1.5em' }} alignItems="center">
              <Grid item>
                <Button onClick={() => setOpen(false)} color="primary">
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.sendButton}
                  type="submit"
                  onClick={() => setOpen(false)}
                >
                  <span>
                    Send Message&nbsp;&nbsp;&nbsp;
                    <img src={sendIcon} alt="send" />
                  </span>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

ContactUsPage.propTypes = {
  setValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default ContactUsPage;
