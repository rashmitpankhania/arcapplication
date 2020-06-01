import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import makeStyles from '@material-ui/styles/makeStyles';
import React from 'react';
import { Tab } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/logo.svg';
import { PageNames, Routes, ServicesMenu } from '../Constants';

const useStyles = makeStyles((theme) => ({
  toolBarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  logo_container: {
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
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
  menu: {
    backgroundColor: theme.palette.common.arcBlue,
    color: 'white',
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
    '&:focus': {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
    color: 'white',
    opacity: 0.7,
  },
}));

// ElevationScroll is for the effect when we scroll it kinds of create an elevation in the header
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
  // noinspection JSUnresolvedVariable
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const menuHandleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const menuHandleClose = (e, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    setOpenMenu(false);
  };
  const handleClick = (e, val) => {
    setValue(val);
  };
  React.useEffect(() => {
    switch (window.location.pathname) {
      default:
        setValue(0);
        break;
      case (Routes.HOME):
        if (value !== 0) {
          setValue(0);
        }
        break;
      case (Routes.SERVICES):
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case (Routes.CUSTOM_SOFTWARE):
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case (Routes.MOBILE_APPS):
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case (Routes.WEBSITES):
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case (Routes.REVOLUTION):
        if (value !== 2) {
          setValue(2);
        }
        break;
      case (Routes.ABOUT_US):
        if (value !== 3) {
          setValue(3);
        }
        break;
      case (Routes.CONTACT_US):
        if (value !== 4) {
          setValue(4);
        }
    }
  }, [value]);

  const tabView = (
    <>
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
          onClick={(e) => menuHandleClick(e)}
          aria-controls="services menu"
          aria-haspopup={anchorEl ? 'true' : undefined}
          aria-owns={anchorEl ? 'my menu' : undefined}
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
      <Menu
        id="services menu"
        anchorEl={anchorEl}
        keepMounted
        open={openMenu}
        onClose={menuHandleClose}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {ServicesMenu.map((obj, index) => (
          <MenuItem
            key={obj.name}
            onClick={(e) => menuHandleClose(e, index)}
            component={Link}
            to={obj.route}
            classes={{ root: classes.menuItem }}
            selected={index === selectedIndex}
          >
            {obj.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawerView = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        open={openDrawer}
      >
        my Drawer
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to={Routes.HOME}
              className={classes.logo_container}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img src={logo} className={classes.logo} alt="company logo" />
            </Button>
            { matches ? drawerView : tabView }
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin} />
    </>
  );
};

export default Header;
