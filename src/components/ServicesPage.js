import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import useTheme from '@material-ui/core/styles/useTheme';
import { useMediaQuery } from '@material-ui/core';
import Services from './ui/Services';

const ServicesPage = (props) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery((theme.breakpoints.down('sm')));
  const { setValue, setSelectedIndex } = props;
  return (
    <Grid container direction="column" alignItems={matchesSM ? 'center' : undefined}>
      <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', position: 'absolute' }}>
        <Typography style={{ color: theme.palette.common.arcBlue, fontSize: '5em', fontFamily: 'Raleway' }}>Services</Typography>
      </Grid>
      <Services setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </Grid>
  );
};

export default ServicesPage;
ServicesPage.propTypes = {
  setValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};
