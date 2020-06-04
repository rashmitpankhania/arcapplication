import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import footerAdornment from '../../assets/Footer Adornment.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.arcBlue,
    width: '100%',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
    zIndex: 1303,
    position: 'relative',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <img src={footerAdornment} alt="black sexy slash" className={classes.adornment} />
    </footer>
  );
};

export default Footer;
