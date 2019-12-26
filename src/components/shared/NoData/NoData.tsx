import React, { useMemo } from 'react';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';

const NoData = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.iconWrap}>
        <ReportProblemOutlinedIcon className={classes.icon} />
      </Box>
      <Typography variant="h5">No data available</Typography>
      <Typography variant="h5">Try to drop an image here...</Typography>
    </>
  );
};

export default NoData;
