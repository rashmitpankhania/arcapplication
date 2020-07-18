import React from 'react';
import { Lottie } from '@crello/react-lottie';
import { cloneDeep } from 'lodash';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import estimateData from '../../animations/estimateAnimation/data.json';
import checkImg from '../../assets/check.svg';
import sendImg from '../../assets/send.svg';
import softwareImg from '../../assets/software.svg';
import mobileImg from '../../assets/mobile.svg';
import websiteImg from '../../assets/website.svg';
import backArrowImg from '../../assets/backArrow.svg';
import forwardArrowImg from '../../assets/forwardArrow.svg';
import backArrowDisabledImg from '../../assets/backArrowDisabled.svg';
import forwardArrowDisabledImg from '../../assets/forwardArrowDisabled.svg';
import cameraImg from '../../assets/camera.svg';
import uploadImg from '../../assets/upload.svg';
import personImg from '../../assets/person.svg';
import personsImg from '../../assets/persons.svg';
import peopleImg from '../../assets/people.svg';
import infoImg from '../../assets/info.svg';
import bellImg from '../../assets/bell.svg';
import usersImg from '../../assets/users.svg';
import iphoneImg from '../../assets/iphone.svg';
import gpsImg from '../../assets/gps.svg';
import customizedImg from '../../assets/customized.svg';
import dataImg from '../../assets/data.svg';
import androidImg from '../../assets/android.svg';
import globeImg from '../../assets/globe.svg';
import biometricsImg from '../../assets/biometrics.svg';
import { PageNames } from '../Constants';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: '1.5em',
  },
  icon: {
    height: '12em',
    width: '10em',
    marginTop: '1em',
    marginLeft: '2em',
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: 50,
    marginTop: '1em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: 'Which style are you interested in?',
    subtitle: null,
    active: true,
    options: [
      {
        id: 1,
        title: PageNames.CUSTOM_SOFTWARE,
        subtitle: null,
        icon: softwareImg,
        iconAlt: 'customized software',
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: PageNames.MOBILE_APPS,
        subtitle: null,
        icon: mobileImg,
        iconAlt: 'mobile',
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: PageNames.WEBSITES,
        subtitle: null,
        icon: websiteImg,
        iconAlt: 'desktop',
        selected: false,
        cost: 0,
      },
    ],
  },
];

const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: 'Which platforms do you need supported?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Web Application',
        subtitle: null,
        icon: websiteImg,
        iconAlt: 'computer outline',
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: 'iOS Application',
        subtitle: null,
        icon: iphoneImg,
        iconAlt: 'outline of iphone',
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: 'Android Application',
        subtitle: null,
        icon: androidImg,
        iconAlt: 'outlines of android phone',
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: 'Which features do you expect to use?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Photo/Video',
        subtitle: null,
        icon: cameraImg,
        iconAlt: 'camera outline',
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: 'GPS',
        subtitle: null,
        icon: gpsImg,
        iconAlt: 'gps pin',
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: 'File Transfer',
        subtitle: null,
        icon: uploadImg,
        iconAlt: 'outline of cloud with arrow pointing up',
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: 'Which features do you expect to use?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Users/Authentication',
        subtitle: null,
        icon: usersImg,
        iconAlt: 'outline of a person with a plus sign',
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: 'Biometrics',
        subtitle: null,
        icon: biometricsImg,
        iconAlt: 'fingerprint',
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: 'Push Notifications',
        subtitle: null,
        icon: bellImg,
        iconAlt: 'outline of a bell',
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: 'What type of custom features do you expect to need?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: 'Low Complexity',
        subtitle: '(Informational)',
        icon: infoImg,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: 'Medium Complexity',
        subtitle: '(Interactive, Customizable, Realtime)',
        icon: customizedImg,
        iconAlt: 'two toggle switches',
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: 'High Complexity',
        subtitle: '(Data Modeling and Computation)',
        icon: dataImg,
        iconAlt: 'outline of line graph',
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: 'How many users do you expect?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: '0-10',
        subtitle: null,
        icon: personImg,
        iconAlt: 'person outline',
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: '10-100',
        subtitle: null,
        icon: personsImg,
        iconAlt: 'outline of two people',
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: '100+',
        subtitle: null,
        icon: peopleImg,
        iconAlt: 'outline of three people',
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: 'Which type of website are you wanting?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: 'Basic',
        subtitle: '(Informational)',
        icon: infoImg,
        iconAlt: 'person outline',
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: 'Interactive',
        subtitle: "(Users, API's, Messaging)",
        icon: customizedImg,
        iconAlt: 'outline of two people',
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: 'E-Commerce',
        subtitle: '(Sales)',
        icon: globeImg,
        iconAlt: 'outline of three people',
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

const EstimatePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [questions, setQuestions] = React.useState(defaultQuestions);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [name, setName] = React.useState('');

  const [phone, setPhone] = React.useState('');
  const [phoneHelper, setPhoneHelper] = React.useState('');

  const [email, setEmail] = React.useState('');
  const [emailHelper, setEmailHelper] = React.useState('');

  const [message, setMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [alert, setAlert] = React.useState({ open: false, message: '', backgroundColor: '' });

  const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const rePhone = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;


  const navigate = (back) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    let nextIndex = activeIndex;
    if (back) nextIndex -= 1;
    else nextIndex += 1;
    newQuestions[activeIndex].active = false;
    newQuestions[nextIndex].active = true;
    setQuestions(newQuestions);
  };

  const backNavDisable = () => {
    const currentlyActive = questions.filter((question) => question.active);
    return currentlyActive[0].id === 1;
  };

  const nextNavDisable = () => {
    const currentlyActive = questions.filter((question) => question.active);
    return currentlyActive[0].id === questions[questions.length - 1].id;
  };

  const handleSelectOption = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const prevSelected = currentlyActive[0].options.filter((option) => option.selected);
    const newSelected = newQuestions[activeIndex].options[id - 1];
    switch (currentlyActive[0].subtitle) {
      case 'Select one.':
        if (prevSelected[0]) {
          prevSelected[0].selected = !prevSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }

    switch (newSelected.title) {
      case PageNames.CUSTOM_SOFTWARE:
        setQuestions(softwareQuestions);
        break;
      case PageNames.MOBILE_APPS:
        setQuestions(softwareQuestions);
        break;
      case PageNames.WEBSITES:
        setQuestions(websiteQuestions);
        break;
      default:
        setQuestions(newQuestions);
        break;
    }
  };

  const handleChange = (event) => {
    switch (event.target.id) {
      case 'name':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        if (reEmail.test(event.target.value) === false) setEmailHelper('Please Enter a valid Email address.');
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
      <Grid container className={classes.mainContainer}>
        <Grid item container lg direction="column">
          <Grid item>
            <Typography variant="h2">Estimate</Typography>
          </Grid>
          <Grid item style={{ marginRight: '2.5em', maxWidth: '50em' }}>
            <Lottie
              config={{ loop: true, autoplay: true, animationData: estimateData }}
              height="30em"
              width="40em"
              style={{ maxWidth: '40em', margin: 0 }}
            />
          </Grid>
        </Grid>
        <Grid item container lg direction="column" alignItems="center">
          {questions.filter((question) => question.active).map((question) => (
            <React.Fragment key={question.id}>
              <Grid item>
                <Typography variant="h2" align="center" style={{ fontWeight: 300 }} gutterBottom>{question.title}</Typography>
                <Typography variant="body1" align="center" gutterBottom>{question.subtitle}</Typography>
              </Grid>
              <Grid item container style={{ marginTop: '2em' }}>
                {question.options.map((option) => (
                  <Grid
                    item
                    container
                    onClick={() => handleSelectOption(option.id)}
                    direction="column"
                    md
                    key={option.title}
                    component={Button}
                    style={{
                      display: 'grid', borderRadius: 0, textTransform: 'none', backgroundColor: option.selected ? theme.palette.common.arcOrange : null,
                    }}
                  >
                    <Grid item style={{ maxWidth: '14em' }}>
                      <Typography variant="h6" align="center" gutterBottom>{option.title}</Typography>
                      <Typography variant="caption" align="center">{option.subtitle}</Typography>
                    </Grid>
                    <Grid item className={classes.icon}>
                      <img src={option.icon} alt={option.iconAlt} />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}
          <Grid item container justify="space-evenly" style={{ width: '15em' }}>
            <Grid item>
              <IconButton disabled={backNavDisable()} onClick={() => navigate(true)}>
                <img src={backNavDisable() ? backArrowDisabledImg : backArrowImg} alt="back arrow" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton disabled={nextNavDisable()} onClick={() => navigate(false)}>
                <img src={nextNavDisable() ? forwardArrowDisabledImg : forwardArrowImg} alt="forward arrow" />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => setDialogOpen(true)} className={classes.estimateButton}>Get Estimate</Button>
          </Grid>
        </Grid>
      </Grid>
      <Dialog open={dialogOpen} style={{ zIndex: theme.zIndex.modal + 2 }} onClose={() => setDialogOpen(false)}>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h2" align="center">Estimate</Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid container>
            <Grid item container direction="column">
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
              <Grid item style={{ marginTop: '1em' }}>
                <Typography variant="body1" paragraph>We can create this falallala for an estimated fallalal</Typography>
                <Typography variant="body1" paragraph>Fill out your name, number, and email, place your request, and we’ll get back to you with details moving forward and a final price.</Typography>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EstimatePage;
