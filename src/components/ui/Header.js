import AppBar from '@material-ui/core/AppBar';
import logo from '../../assets/logo.svg';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import makeStyles from '@material-ui/styles/makeStyles';
import React from 'react';
import { Tab } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    toolBarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em'
    },
    logo: {
        height: '7em'
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px'
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '25px',
        height: '45px',
        color: 'white'
    }
}));

const ElevationScroll = (props) => {
    const {children} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
};

const Header = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState();
    const handleClick = (e, val) => {
        setValue(val);
    };
    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <img src={logo} className={classes.logo} alt="company logo"/>
                        <Tabs value={value} className={classes.tabContainer} onChange={handleClick}
                              indicatorColor="primary">
                            <Tab className={classes.tab} label="Home"/>
                            <Tab className={classes.tab} label="Services"/>
                            <Tab className={classes.tab} label="Revolution"/>
                            <Tab className={classes.tab} label="About Us"/>
                            <Tab className={classes.tab} label="Contact Us"/>
                        </Tabs>
                        <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolBarMargin}/>
        </>
    );
};

export default Header;
