import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    toolBarMargin: {
        ...theme.mixins.toolbar
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
    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h3">
                            Arc Development
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolBarMargin}/>
        </>
    );
};

export default Header;
