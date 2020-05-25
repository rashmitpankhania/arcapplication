import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import makeStyles from '@material-ui/styles/makeStyles';
import React from 'react';
import { Tab } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { PageNames, Routes } from '../Constants';

const useStyles = makeStyles((theme) => ({
  toolBarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '7em',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    color: 'white',
  },
}));

const ElevationScroll = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleClick = (e, val) => {
    setValue(val);
  };
  React.useEffect(() => {
    if (window.location.pathname === Routes.HOME && value !== 0) setValue(0);
    else if (window.location.pathname === Routes.SERVICES && value !== 1) setValue(1);
    else if (window.location.pathname === Routes.REVOLUTION && value !== 2) setValue(2);
    else if (window.location.pathname === Routes.ABOUT_US && value !== 3) setValue(3);
    else if (window.location.pathname === Routes.CONTACT_US && value !== 4) setValue(4);
  }, [value]);
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img src={logo} className={classes.logo} alt="company logo" />
            <Tabs
              value={value}
              className={classes.tabContainer}
              onChange={handleClick}
              indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                label={PageNames.HOME}
                component={Link}
                to={Routes.HOME}
              />
              <Tab
                className={classes.tab}
                label={PageNames.SERVICES}
                component={Link}
                to={Routes.SERVICES}
              />
              <Tab
                className={classes.tab}
                label={PageNames.REVOLUTION}
                component={Link}
                to={Routes.REVOLUTION}
              />
              <Tab
                className={classes.tab}
                label={PageNames.ABOUT_US}
                component={Link}
                to={Routes.ABOUT_US}
              />
              <Tab
                className={classes.tab}
                label={PageNames.CONTACT_US}
                component={Link}
                to={Routes.CONTACT_US}
              />
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin} />
    </>
  );
};

export default Header;
