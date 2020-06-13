import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import { useMediaQuery } from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import { PageNames, Routes } from '../Constants';
import ButtonArrow from './ButtonArrow';
import customSoftware from '../../assets/Custom Software Icon.svg';
import mobileApps from '../../assets/mobileIcon.svg';
import websites from '../../assets/websiteIcon.svg';

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.learnButton,
    fontSize: '0.7rem',
    height: 35,
    width: 140,
  },
}));

const Services = (props) => {
  const { setValue, setSelectedIndex } = props;
  const theme = useTheme();
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      {/* Custom Software Block */}
      <Grid item>
        <Grid
          container
          style={{ marginTop: '12em', padding: matchesSM ? '1em' : 0 }}
          justify={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}
          >
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
            <Button
              onClick={() => { setValue(1); setSelectedIndex(1); }}
              component={Link}
              to={Routes.CUSTOM_SOFTWARE}
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={customSoftware}
              alt="custom software"
              style={{ marginLeft: '2em', marginTop: matchesSM ? '1em' : undefined }}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Mobile Apps Block */}
      <Grid item>
        <Grid
          container
          style={{ marginTop: '12em', padding: matchesSM ? '1em' : 0 }}
          justify={matchesSM ? 'center' : 'flex-end'}
        >
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
            <Button
              onClick={() => { setValue(1); setSelectedIndex(2); }}
              component={Link}
              to={Routes.MOBILE_APPS}
              variant="outlined"
              className={classes.learnButton}
            >
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
        <Grid
          container
          style={{ marginTop: '12em', padding: matchesSM ? '1em' : 0 }}
          justify={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}
          >
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
            <Button
              onClick={() => { setValue(1); setSelectedIndex(3); }}
              component={Link}
              to={Routes.WEBSITES}
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              src={websites}
              alt="websites"
              style={{ marginLeft: '2em', marginTop: matchesSM ? '1em' : undefined }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Services;
Services.propTypes = {
  setValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};
