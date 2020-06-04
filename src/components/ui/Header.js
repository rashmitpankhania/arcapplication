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
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { PageNames, Routes } from '../Constants';
import logo from '../../assets/logo.svg';

export const ServicesMenu = [
  {
    name: PageNames.SERVICES, route: Routes.SERVICES, activeIndex: 1, selectedIndex: 0,
  },
  {
    name: PageNames.CUSTOM_SOFTWARE,
    route: Routes.CUSTOM_SOFTWARE,
    activeIndex: 1,
    selectedIndex: 1,
  },
  {
    name: PageNames.MOBILE_APPS, route: Routes.MOBILE_APPS, activeIndex: 1, selectedIndex: 2,
  },
  {
    name: PageNames.WEBSITES, route: Routes.WEBSITES, activeIndex: 1, selectedIndex: 3,
  },
];

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
  drawer: {
    backgroundColor: theme.palette.common.arcBlue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.arcOrange,
    fontFamily: 'Pacifico',
    color: 'white',
  },
  drawerSelectedItem: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
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

  const BaseMenu = [
    { name: PageNames.HOME, route: Routes.HOME, activeIndex: 0 },
    {
      name: PageNames.SERVICES,
      route: Routes.SERVICES,
      activeIndex: 1,
      onMouseOver: (e) => menuHandleClick(e),
      aria_controls: 'services menu',
      aria_haspopup: anchorEl ? 'true' : undefined,
      aria_owns: anchorEl ? 'my menu' : undefined,
    },
    { name: PageNames.REVOLUTION, route: Routes.REVOLUTION, activeIndex: 2 },
    { name: PageNames.ABOUT_US, route: Routes.ABOUT_US, activeIndex: 3 },
    { name: PageNames.CONTACT_US, route: Routes.CONTACT_US, activeIndex: 4 },

  ];
  React.useEffect(() => {
    [...ServicesMenu, ...BaseMenu].forEach((obj) => {
      switch (window.location.pathname) {
        case `${obj.route}`:
          if (value !== obj.activeIndex) {
            setValue(obj.activeIndex);
            if (obj.selectedIndex && obj.selectedIndex !== selectedIndex) {
              setSelectedIndex(obj.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, ServicesMenu, BaseMenu, selectedIndex]);

  const tabView = (
    <>
      <Tabs
        value={value}
        className={classes.tabContainer}
        onChange={handleClick}
        indicatorColor="primary"
      >
        {BaseMenu.map((obj) => (
          <Tab
            key={obj.name}
            className={classes.tab}
            label={obj.name}
            component={Link}
            to={obj.route}
            onMouseOver={obj.onMouseOver}
            onFocus={obj.onMouseOver}
            aria-controls={obj.aria_controls}
            aria-haspopup={obj.aria_haspopup}
            aria-owns={obj.aria_owns}
          />
        ))}
      </Tabs>
      <Button variant="contained" component={Link} to={Routes.ESTIMATE} color="secondary" className={classes.button}>
        Free
        Estimate
      </Button>
      <Menu
        id="services menu"
        anchorEl={anchorEl}
        keepMounted
        open={openMenu}
        onClose={menuHandleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: menuHandleClose }}
        elevation={0}
        style={{ zIndex: 1302 }}
      >
        {ServicesMenu.map((obj) => (
          <MenuItem
            key={obj.name}
            onClick={(e) => menuHandleClose(e, obj.selectedIndex)}
            onKeyUp={(e) => { if (e.keyCode === 13) { menuHandleClose(e, obj.selectedIndex); } }}
            component={Link}
            to={obj.route}
            classes={{ root: classes.menuItem }}
            selected={obj.selectedIndex === selectedIndex}
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
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolBarMargin} />
        <List disablePadding>
          {BaseMenu.map((obj) => (
            <ListItem
              key={obj.name}
              selected={value === obj.activeIndex}
              onClick={() => {
                setOpenDrawer(false);
                setValue(obj.activeIndex);
              }}
              divider
              button
              component={Link}
              to={obj.route}
              classes={{ selected: classes.drawerSelectedItem }}
            >
              <ListItemText
                disableTypography
                className={classes.drawerItem}
                primary={obj.name}
              />
            </ListItem>
          ))}
          <ListItem
            onClick={() => { setOpenDrawer(false); setValue(5); }}
            classes={{ root: classes.drawerItemEstimate, selected: classes.drawerSelectedItem }}
            button
            component={Link}
            to={Routes.ESTIMATE}
            selected={value === 5}
          >
            <ListItemText
              className={classes.drawerItem}
              disableTypography
              primary={PageNames.ESTIMATE}
            />
          </ListItem>
        </List>
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
        <AppBar position="fixed" className={classes.appbar}>
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
            {matches ? drawerView : tabView}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin} />
    </>
  );
};
export default Header;
