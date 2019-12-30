import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      color: '#fff',
      padding: 0,
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url(./assets/bg-01.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      zIndex: 1,
      position: 'relative',
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255,255,255,0.9)',
      },
    },
    wrapper: {
      width: '500px',
      borderRadius: 10,
      padding: '55px 55px 37px',
      background: 'linear-gradient(top,#7579ff,#b224ef)',
      fallbacks: {
        background: '#9152f8',
      },
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: '2rem',
    },
    avatar: {
      margin: theme.spacing(3),
      backgroundColor: '#fff',
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
    avatarIcon: {
      width: '100%',
      height: theme.spacing(10),
      color: '#333333',
    },
    submit: {
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '25px',
      padding: theme.spacing(2, 5),
      color: '#555555',
      lineHeight: 1.2,
      backgroundColor: '#fff',
      textTransform: 'none',

      '&:hover': {
        color: '#fff',
        background: 'linear-gradient(bottom, #7579ff, #b224ef)',

        fallbacks: {
          background: '#9152f8',
        },
      },
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#fff',
      lineHeight: 1.2,
      textAlign: 'center',
      textTransform: 'uppercase',
      display: 'block',
    },
  })
);

export default useStyles;
