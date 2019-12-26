import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    iconWrap: {
      marginBottom: theme.spacing(3),
    },
    icon: {
      fontSize: 38,
    },
  })
);

export default useStyles;
