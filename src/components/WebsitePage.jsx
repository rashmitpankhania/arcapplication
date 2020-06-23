import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  Hidden, IconButton, makeStyles, Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import CallToAction from './ui/CallToAction';
import { Routes } from './Constants';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import analyticsImg from '../assets/analytics.svg';
import ecommerceImg from '../assets/ecommerce.svg';
import outreachImg from '../assets/outreach.svg';
import seoImg from '../assets/seo.svg';

const rows = [
  {
    img: analyticsImg,
    title: 'Analytics',
    paras: ['Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business,empowering you to make smarter decisions with measurable effects.'],
    justify: undefined,
    marginLeft: '-2.5em',
  },
  {
    img: ecommerceImg,
    title: 'E-Commerce',
    paras: ['It’s no secret that people like to shop online.', 'In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.'],
    justify: 'flex-end',
    textMarginLeft: '1em',
    textAlign: 'center',
  },
  {
    img: outreachImg,
    title: 'Outreach',
    paras: ['Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what’s right for them before visiting in person.'],
    justify: undefined,
    textMarginLeft: '1em',
  },
  {
    img: seoImg,
    title: 'Search Engine Optimization',
    paras: ['How often have you ever been to the second page of Google results?',
      'If you’re like us, probably never.',
      'Customers don’t go there either, so we make sure your website is designed to end up on top.',
    ],
    justify: 'flex-end',
    textMarginLeft: '-8em',
    textAlign: 'center',
  },
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


const WebsitePage = (props) => {
  const classes = useStyles();
  const { setValue, setSelectedIndex } = props;
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Grid item container direction="column" className={classes.mainContainer}>
        {/* Hero component */}
        <Grid
          item
          container
          direction="row"
          justify={matchesMD ? 'center' : undefined}
        >
          <Hidden mdDown>
            <Grid item style={{ marginTop: '0.7em', marginLeft: '-3.5em', marginRight: '1em' }}>
              <IconButton style={{ backgroundColor: 'transparent' }} onClick={() => setSelectedIndex(2)} component={Link} to={Routes.MOBILE_APPS}>
                <img src={backArrow} alt="back arrow" />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item container direction="column" style={{ maxWidth: '40em' }}>
            <Grid item>
              <Typography variant="h2" gutterBottom align={matchesMD ? 'center' : 'inherit'}>
                Website Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align={matchesMD ? 'center' : 'inherit'} paragraph>
                Having a website is a necessity in today’s business world.
                They give you one central, public location to let people know who you are,
                what you do, and why you’re the best at it.
              </Typography>
              <Typography variant="body1" align={matchesMD ? 'center' : 'inherit'} paragraph>
                From simply having your hours posted to having a full fledged online store,
                making yourself as accessible as possible to users online drives growth and
                enables you to reach new customers.
                <Hidden mdDown>
                  <IconButton style={{ backgroundColor: 'transparent' }} onClick={() => setSelectedIndex(0)} component={Link} to={Routes.SERVICES}>
                    <img src={forwardArrow} alt="back to services" />
                  </IconButton>
                </Hidden>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {rows.map((obj) => (
          <Grid
            key={obj.title}
            item
            container
            style={{ marginTop: '12em' }}
            justify={matchesSM ? 'center' : obj.justify}
            alignItems="center"
            direction={matchesSM ? 'column' : 'row'}
          >
            <Grid item>
              <Grid container direction="column" alignItems={matchesSM ? 'center' : undefined}>
                <Grid item>
                  <Typography variant="h4" align={obj.textAlign} gutterBottom>
                    {obj.title}
                  </Typography>
                </Grid>
                <Grid item style={{ marginLeft: obj.marginLeft }}>
                  <img
                    src={obj.img}
                    alt={obj.title}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              style={{
                textAlign: matchesSM ? 'center' : undefined, marginTop: '1em', maxWidth: '30em', marginLeft: matchesSM ? 0 : obj.textMarginLeft,
              }}
            >
              {obj.paras.map((para) => (
                <Typography variant="body1" key={para.length} paragraph>
                  {para}
                </Typography>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </>
  );
};

WebsitePage.propTypes = {
  setValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default WebsitePage;
