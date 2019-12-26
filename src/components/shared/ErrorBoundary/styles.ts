import { createStyles, Theme } from '@material-ui/core';

export default (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    },
  });
