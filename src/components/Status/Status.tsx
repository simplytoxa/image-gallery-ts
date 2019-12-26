import React from 'react';
import { Box, Typography } from '@material-ui/core';
import BurstModeOutlinedIcon from '@material-ui/icons/BurstModeOutlined';

interface Props {
  filesCount: number;
}

const Status = (props: Props) => {
  return (
    <Box fontSize={18} color="grey" display="flex">
      <BurstModeOutlinedIcon />
      <Box marginLeft="10px">
        <Typography component="span">{props.filesCount}</Typography>
      </Box>
    </Box>
  );
};

export default Status;
